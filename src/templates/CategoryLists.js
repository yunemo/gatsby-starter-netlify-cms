import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Pagenation from '../components/Pagenation'
import Layout from '../components/Layout'
import CategoryColors from '../data/CategoryColors'
import { snakeCase } from 'lodash'
import BackgroundImage from 'gatsby-background-image'

const CategoryLists = props => {
  const category = props.pageContext.category
  const snakeCasedCategory = snakeCase(category)
  const title = props.pageContext.title
  const posts = props.pageContext.edges
  const postLinks = posts.map(post => (
    <li key={post.node.fields.slug} className="archive_item">
      <Link to={post.node.fields.slug} className="archive_link">
        
        {post.node.frontmatter.featuredimage ? (
          
          <BackgroundImage
            Tag="div"
            className="archive_thumbnail"
            fluid={post.node.frontmatter.featuredimage.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          />
        ) : null}
        <div className="archive_category" style={
          CategoryColors[snakeCasedCategory] ?
            { color: CategoryColors[snakeCasedCategory] }
            : null
        }>{category}</div>
        <h2 className="archive_excerpt">{post.node.frontmatter.title}</h2>
      </Link>
    </li>
  ))
  
  return (
    <Layout>
      <div className="archive">
        <div className="archive_header" style={
          CategoryColors[snakeCasedCategory] ?
            { backgroundColor: CategoryColors[snakeCasedCategory] }
            : null
        }>
            <div className="container">
              <h1 className="archive_title">
                {category}
              </h1>   
          </div>
        </div>
        <Helmet title={`${category} | ${title}`} />
        <div className="archive_content">
          <div className="container">
            <ul className="archive_list">{postLinks}</ul>
            <Pagenation
              baseDir={`/${snakeCasedCategory}/`}
              currentPage={props.pageContext.currentPage}
              numPages={props.pageContext.numPages}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
  
}

export default CategoryLists


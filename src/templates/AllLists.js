import React from 'react'
import Layout from '../components/Layout'
import Pagenation from '../components/Pagenation'
import { Link, graphql } from 'gatsby'
import CategoryColors from '../data/CategoryColors'
import { snakeCase } from 'lodash'
import BackgroundImage from 'gatsby-background-image'



const AllLists = props => {
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <div className="home">
        <div className="container">
          
          <ul className="home_list">
            {posts &&
              posts.map(({ node: post }, index) => (
                <li className={`home_item home_item${index}`} key={post.id}>
                  <Link
                    className="home_link"
                    to={post.fields.slug}
                  >
                      {post.frontmatter.featuredimage ? (
                    
                        <BackgroundImage
                          Tag="div"
                          className="home_thumbnail"
                          fluid={post.frontmatter.featuredimage.childImageSharp.fluid}
                          backgroundColor={`#040e18`}
                        />
                    ) : null}
                    <p className="home_category" style={
                      CategoryColors[snakeCase(post.frontmatter.category)] ?
                        { color: CategoryColors[snakeCase(post.frontmatter.category)] }
                        : null
                    }>{post.frontmatter.category}</p>
                    <h3 className="home_headding">{post.frontmatter.title}</h3>
                  </Link>
                </li>
              ))}
          </ul>

          <Pagenation
            baseDir="/"
            currentPage={props.pageContext.currentPage}
            numPages={props.pageContext.numPages}
          />

        </div>
      </div>
    </Layout>
  )
}
  
export const AllListsQuery = graphql`
query AllListsQuery($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    filter: { frontmatter: { templateKey: { eq: "BlogPost" } } }
    limit: $limit
    skip: $skip
  ) {
    edges {
      node {
        excerpt(pruneLength: 400)
        id
        fields {
          slug
        }
        frontmatter {
          title
          templateKey
          date(formatString: "MMMM DD, YYYY")
          category
          featuredimage {
            childImageSharp {
              fluid(maxWidth: 630, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`
export default  AllLists

import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import CategoryColors from '../data/CategoryColors'
import { snakeCase } from 'lodash'

const RelatedItem = ({post}) => (
  <li className="related_item" key={post.id}>
    <Link to={post.fields.slug} className="related_link">
      <BackgroundImage
        Tag="div"
        className="related_thumbnail"
        fluid={post.frontmatter.featuredimage.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      />
      <div className="related_category"  style={
        CategoryColors[snakeCase(post.frontmatter.category)] ?
          { color: CategoryColors[snakeCase(post.frontmatter.category)] }
          : null
      }>
        {post.frontmatter.category}
      </div>
      <div className="related_headding">
        {post.frontmatter.title}</div>
    </Link>
  </li>
)

const RelatedPost = ({ title, category }) => (
  <StaticQuery
    query={graphql`
      query RelatedPostQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "BlogPost" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              excerpt(format: PLAIN, pruneLength: 75, truncate: true)
              frontmatter {
                title
                category
                date(formatString: "YYYY/MM/DD")
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 300, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={ data => {
      const relatedPosts = data.allMarkdownRemark.edges.filter(edge => {
        if (edge.node.frontmatter.title === title) {
          return false
        }
        if (edge.node.frontmatter.category === category) {
          return true
        }
          return false
      })
      if (!relatedPosts) {
        return null
      } else {

        const displayedPosts = relatedPosts.slice(0, 3)

        return (
          <section className="related">
            <div className="container">
              <h2 className="related_title">See more</h2>
              <ul className="related_list">
                {displayedPosts &&
                  displayedPosts.map(({ node: post }) => (
                    <RelatedItem post={post} />
                  ))}
              </ul>
            </div>
          </section>
        )
      }
    }}
  />
)

RelatedPost.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export default RelatedPost
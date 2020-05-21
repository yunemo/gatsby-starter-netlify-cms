import React from 'react'
import PropTypes from 'prop-types'
import { snakeCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import RelatedPost from '../components/RelatedPost'
import Img from "gatsby-image"
import facebook from '../img/icon-fb.svg'
import twitter from '../img/icon-tw.svg'
import CategoryColors from '../data/CategoryColors'


export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  category,
  title,
  featuredimage,
  figcaption,
  date
}) => {
  
  return (
    <section className="post">
      tesu
      </section>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html  
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        category
        figcaption
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 960, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default BlogPost
import React from 'react'
import PropTypes from 'prop-types'
import { snakeCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import RelatedPost from '../components/RelatedPost'
import Img from "gatsby-image"
import facebook from '../img/icon-fb.svg'
import twitter from '../img/icon-tw.svg'
import CategoryColors from '../data/CategoryColors'
import { FacebookShareButton, TwitterShareButton } from "react-share";


export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  date,
  category,
  title,
  figcaption,
  featuredimage
}) => {
  const PostContent = contentComponent || Content

  const dateList = date ? date.toUTCString().split(" ") : ""
  const dateStr = dateList ? `${dateList[2]} ${dateList[1]},${dateList[3]}` : "";

  return (
    <section className="post">
      <div className="post_header">
        <div className="post_subline">
          <div className="post_date"> {dateStr} </div>
          <div className="post_category" style={
            CategoryColors[snakeCase(category)] ?
              { color: CategoryColors[snakeCase(category)] }
              : null
          }>
            {category}     
          </div>
        </div>

        <h1 className="post_title">{title}</h1>
        <div className="post_social">
          <a className="post_social_link" href="https://www.facebook.com/ZeBrand.official/" target="_blank" alt="facebook">
            <img src={facebook} />
          </a>
          <a className="post_social_link" href="https://twitter.com/ZeBrandOfficial/" target="_blank" alt="twitter">
            <img src={twitter} />
          </a>
        </div>
        {
          featuredimage ? figcaption ? (
            <div className="post_kv _preview">
              <img src={featuredimage} />
              <div className="post_caption">{figcaption}</div>
            </div>
          ) : (
              <div className="post_kv _preview">
              <img src={featuredimage} />
              </div>
            ) : null
        }
      </div>
      <PostContent content={content} className="post_content"/>
    
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  category: PropTypes.string,
  title: PropTypes.string,
  figcaption: PropTypes.string,
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}


const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const { title, description, category, date } = post.frontmatter
  const { figcaption }  = post.fields
  const featuredimage = post.frontmatter.featuredimage.childImageSharp.fluid
  const content = post.html
  const PostContent = HTMLContent || content
  const pageUrl = `https://zebranding.com/blog/${post.fields.slug}`

  return (
    <Layout>
      <section className="post">
        <Helmet titleTemplate="%s | Blog">
          <title>{title}</title>
          <meta
            name="description"
            content={`${description}`}
          />
        </Helmet>

        <div className="post_header">
          <div className="post_subline">
            <div className="post_date">{date} </div>
            <div className="post_category" style={
              CategoryColors[snakeCase(category)] ?
                { color: CategoryColors[snakeCase(category)] }
                : null
            }>
              {category}     
            </div>
          </div>

          <h1 className="post_title">{title}</h1>

          <div className="post_social">
          <FacebookShareButton url={pageUrl} className="post_social_link">
            <img src={facebook} />
          </FacebookShareButton>
          <TwitterShareButton url={pageUrl} className="post_social_link">
            <img src={twitter} />
          </TwitterShareButton>
          </div>

          {
            featuredimage ? figcaption ? (
              <div className="post_kv">
                <Img fluid={featuredimage} alt={title} />
                <div className="post_caption" dangerouslySetInnerHTML={{__html: figcaption}}></div>
              </div>
            ) : (
                <div className="post_kv">
                  <Img fluid={featuredimage} alt={title} />
                </div>
              ) : null
          }

        </div>

        <PostContent content={content} className="post_content"/>

        <RelatedPost category={category} title={title}/>
      
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
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 960, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
        figcaption
      }
    }
  }
`
export default BlogPost

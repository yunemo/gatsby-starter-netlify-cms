const { snakeCase } = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(limit: 1000) {
        group(field: frontmatter___category) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 300, quality: 100) {
                      base64
                      aspectRatio
                      src
                      srcSet
                      sizes
                      originalImg
                    }
                  }
                }
              }
            }
          }
          fieldValue
        }
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              category
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    // All article data retrieved by graphQL
    const posts = result.data.allMarkdownRemark.edges

    // Site title data retrieved by graphQL
    const title = result.data.site.siteMetadata.title


    /*
    *
    *　Create blog posts from markdown files
    *
    */
    const createBlogPosts = () => {
      posts.forEach(edge => {
        const id = edge.node.id
        createPage({
          path: edge.node.fields.slug,
          tags: edge.node.frontmatter.tags,
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          ),
          context: {
            id,
          },
        })
      })
   }

    /*
    *
    *　Create list of all blog posts
    *
    */
    const createAllListPages = () => {
      const postsPerPage = 10
      const numPages = Math.ceil(posts.length / postsPerPage)
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/` : `/${i + 1}`,
          component: path.resolve("src/templates/AllLists.js"),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          },
        })
      })
    }
    
    /*
    *
    *　Create lists of articles belonging to a specific category
    *
    */
    const createCategoryListPages = () => {
      const categoriesGroup = result.data.allMarkdownRemark.group
      const postsPerPage = 12
      let categories = categoriesGroup.map((value) => {
        return value.fieldValue
      })

      categories.forEach((category, categoryIndex) => {
        const numPages = Math.ceil(categoriesGroup[categoryIndex].edges.length / postsPerPage)

        Array.from({ length: numPages }).forEach((value, i) => {


          createPage({
            path: i === 0 ? `/${snakeCase(category)}` : `/${snakeCase(category)}/${i + 1}`,
            component: path.resolve("src/templates/CategoryLists.js"),
            context: {
              title,
              category,
              numPages,
              currentPage: i + 1,
              edges: categoriesGroup[categoryIndex].edges.slice(i * postsPerPage , (i + 1) * postsPerPage)
            },
          })
        })
      })
    }

    createBlogPosts()
    createAllListPages()
    createCategoryListPages()
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = node.frontmatter.slug || createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

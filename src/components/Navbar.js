import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import { snakeCase } from 'lodash'

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query NavbarQuery {
        allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___category) {
            fieldValue
          }
        }
      }
    `}
    render={data => (
      <div className="navbar">
        <Link className="navbar_title" to="/blog">Blog</Link>
        <ul className="navbar_list">
        {data.allMarkdownRemark.group.map(category => (
          <li key={category.fieldValue} className="navbar_item">
            <Link to={`/blog/${snakeCase(category.fieldValue)}/`} className="navbar_link">
              {category.fieldValue}
            </Link>
          </li>
        ))}
        </ul>
      </div>
      )
    }
  />
)

export default Navbar
import React from 'react'
import PropTypes from 'prop-types'
import BlogPost from '../../templates/BlogPost'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <BlogPost
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      date={entry.getIn(['data', 'date'])}
      category={entry.getIn(['category', 'date'])}
      title={entry.getIn(['data', 'title'])}
      featuredimage={entry.getIn(['data', 'featuredimage'])}
    />
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview

import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/BlogPost'

const BlogPostPreview = ({ entry, widgetFor, getAsset }) => {
  return (
    <BlogPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      date={entry.getIn(['data', 'date'])}
      category={entry.getIn(['data', 'category'])}
      title={entry.getIn(['data', 'title'])}
      figcaption={entry.getIn(['data', 'figcaption'])}
      featuredimage={getAsset(entry.getIn(['data', 'image']))}
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

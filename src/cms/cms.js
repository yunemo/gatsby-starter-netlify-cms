import CMS from 'netlify-cms-app'

import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewTemplate('post', BlogPostPreview)

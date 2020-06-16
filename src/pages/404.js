import { useEffect } from 'react'
import { navigate } from 'gatsby'

const NotFoundPage = () => {
  useEffect(() => {
    window.location = 'https://zebranding.com/404';
  }, [])

  return null
};

export default NotFoundPage

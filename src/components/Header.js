import React from 'react'
import { useMediaQuery } from "react-responsive";
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

const Header = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1030px)'
  })
  return (
    <div>  
      { isDesktop ? <DesktopHeader /> : <MobileHeader /> }
    </div>
  )
}
      
export default Header

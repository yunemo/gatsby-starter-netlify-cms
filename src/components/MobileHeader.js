import React, {useState} from 'react'
import logo from '../img/logo.svg'
import IconClose from '../img/icon-close.svg'

const pushGAEvent = () =>
    window.dataLayer.push({
      event: "gaEvent",
      eventCategory: "getstarted",
      eventAction: "click",
      eventLabel: "blog-click-header"
    });

const MobileHeader = () => {
  const[isMenuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }
  return (
    <div className="GlobalHeaderMobile">
      <button className="button-menu" onClick={toggleMenu}>
        Menu
      </button>
  
      <div className={isMenuOpen ? 'menu-contents active' : 'menu-contents'}>
        <button className="button-close">
          <img src={IconClose} width="30" onClick={toggleMenu} />
        </button>
        <nav>
          <ul className="sp-list-nav">
            <li>
              <a href="/about/">
                About
                </a>
            </li>
            <li>
              <a href="/how-to/">
                How to Use
                </a>
            </li>
            <li>
              <a
                href="https://zebranding.zendesk.com/hc/en-us"
                target="_blank"
              >
                Support
                </a>
            </li>
          </ul>
        </nav>
      
        <div className="button-area">
          <p className="liner">
            ZeBrand is a branding app for early stage businesses.
            </p>
          <div>
            <a href="/input" className="button-start" onClick={pushGAEvent}>
              Get Started
              </a>
          </div>
          <p className="note">
            Free trial. No credit card required.
            </p>
        </div>
      </div>
  
  
      <h1 className="site-name">
        <a href="/">
          <img src={logo} />
        </a>
      </h1>
  
      <div>
        <nav>
          <div>
            <a href="/login" className="button-login">
              Log In
            </a>
          </div>
        </nav>
      </div>
  
    </div>
  )
}

export default MobileHeader

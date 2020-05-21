import React from 'react'
import logo from '../img/logo.svg'

const DesktopHeader = () => (
  <div className="GlobalHeaderDesktop">
    <h1 className="site-name">
      <a href="/">
        <img src={logo} />
      </a>
    </h1>

    <nav>
      <ul className="list-nav-1">
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
          <a href="https://zebranding.zendesk.com/hc/en-us" target="_blank">
            Support
          </a>
        </li>
      </ul>
    </nav>

    <nav>
      <ul className="list-nav-2">
        <li>
          <a href="/login" className="button-login">
            Log In
          </a>
        </li>
        <li>
          <a href="/input" className="button-start">
            Get Started
          </a>
        </li>
      </ul>
    </nav>
  </div>
)

export default DesktopHeader
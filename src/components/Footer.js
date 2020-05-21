import React from 'react'
import logo from '../img/logo.svg'
import facebook from '../img/facebook.svg'
import instagram from '../img/instagram.svg'
import twitter from '../img/twitter.svg'
import linkedin from '../img/linkedin.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="GlobalFooter">
        <div className="column-left">
          <div className="inner">
            <p className="logo">
              <a href="/">
                <img src={logo} />
              </a>
            </p>
            <nav>
              <ul className="list-sns">
                <li>
                  <a
                    href="https://www.facebook.com/ZeBrand.official/"
                    target="_blank"
                  >
                    <img src={facebook} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/ZeBrandOfficial/" target="_blank">
                    <img src={twitter} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/zebrand-official/"
                    target="_blank"
                  >
                    <img src={linkedin} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/zebrand.official/"
                    target="_blank"
                  >
                    <img src={instagram} />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <nav className="column-right">
          <div className="inner">
            <h4 className="heading">
              Product
            </h4>
            <ul className="list-nav">
              <li>
                <a href="/how-to/">
                  How to Use
                </a>
              </li>
              <li>
                <a href="/pricing/">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="inner">
            <h4 className="heading">
              Company
            </h4>
            <ul className="list-nav">
              <li>
                <a href="/about/">
                  About
                </a>
              </li>
              <li>
                <a href="/terms-of-service/">
                  Terms
                </a>
              </li>
              <li>
                <a href="/privacy-policy/">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="inner">
            <h4 className="heading">
              Support &amp; Contact
            </h4>
            <ul className="list-nav">
              <li>
                <a href="https://zebranding.zendesk.com/hc/en-us" target="_blank">
                  Help &amp; Support
                </a>
              </li>
              <li>
                <a
                  href="https://zebranding.zendesk.com/hc/en-us/requests/new"
                  target="_blank"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="inner">
            <h4 className="heading">
              Learn
            </h4>
            <ul className="list-nav">
              <li>
                <a
                  href="https://zebranding.zendesk.com/hc/en-us/sections/360005545234"
                  target="_blank"
                >
                  Support Articles
                </a>
              </li>
              <li>
                <a
                  href="https://www.pinterest.cl/zebrand_official/"
                  target="_blank"
                >
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
    )
  }
}

export default Footer

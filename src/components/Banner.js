import React from 'react'
import BannarImage from '../img/banner-image.png'

const Banner = () => (
  <div className="banner">
    <div className="banner_container">
        <div className="banner_box">
            <div className="banner_text">
                <div className="banner_title">
                A New Venture?<br />
                Build your Brand Today. 
                </div> 
                <a className="banner_button" href="https://zebranding.com/input/0">
                    Get Started
                </a>  
                <div className="banner_description">
                    Free trial. No credit card required.
                </div>  
            </div>
            <div className="banner_image">
                <img src={BannarImage} alt="Build your Brand Today. "/>
            </div>   
        </div>    
    </div>
  </div>
);

export default Banner;
import React from 'react'
import "./Hero.css"
import { FaApple } from 'react-icons/fa';
import { BiLogoPlayStore } from "react-icons/bi";

const Hero = () => {
  return (
    
      <div className='container-hero '>
        <div className='section-hero-data'>
            <h1 className='tagline'>Meet new and <br/> interesting dogs <br/> nearby.</h1>
            <div className="buttons">
              <button type="button" className="c-btn buttn">
                <FaApple size={20} style={{ marginRight: '5px' }} /> Download
              </button>
              <button type="button" className="c-btn buttn-light">
                <BiLogoPlayStore size={20} style={{ marginRight: '5px' }}/> Download
              </button>
            </div>

        </div>
        <div className='section-hero-image'>
            <img className='my-iphone' src='images/iphone6.png'></img>
      </div>
      </div>
    
  )
}

export default Hero

import React from 'react'
import "./CallToAction.css"
import { FaApple } from 'react-icons/fa';
import { BiLogoPlayStore } from "react-icons/bi";

const CallToAction = () => {
  return (
    <div className='call-container' id='download'>
        <div className='call-heading'><h2>Find the true love of your dog's life today.</h2></div>
        <div className="buttons">
              <button type="button" className=" c-btn buttn">
                <FaApple size={20} style={{ marginRight: '5px' }} /> Download
              </button>
              <button type="button" className="c-btn buttn-light">
                <BiLogoPlayStore size={20} style={{ marginRight: '5px' }}/> Download
              </button>
            </div>
      
    </div>
  )
}

export default CallToAction

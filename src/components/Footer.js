import React from 'react'
import "./FooterStyles.css"
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer' id='contact'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: "#000000",  marginRight: "2rem"}}/>
                    <div>
                        <p>123 Housing Society.</p>
                        <p>India.</p>
                    </div>
                </div>
                <div className='phone'>
                    <FaPhone size={20} style={{color: "#000000", marginRight: "2rem" }}/>
                    <div>
                        <p>1234567890</p>
                    </div>
                </div>
                <div className='email'>
                    <FaMailBulk size={20} style={{color: "#000000", marginRight: "2rem" }}/>
                    <div>
                        <p>p@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='right'>
                <h4>About the company</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim v</p>
                <div className='social'>
                    <FaFacebook className='s-icon'
                    size={30}
                    style={{color: "#000000", marginRight: "1rem"}}
                    
                    />
                     <FaTwitter className='s-icon'
                    size={30}
                    style={{color: "#000000", marginRight: "1rem"}}
                    
                    />
                     <FaLinkedin className='s-icon'
                    size={30}
                    style={{color: "#000000", marginRight: "1rem"}}
                    
                    />

                </div>
            
            </div>
        </div>

      
    </div>
  )
}

export default Footer

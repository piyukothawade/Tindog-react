import React, { useState } from 'react';
import "./NavbarStyles.css"
// import { Link } from 'react-router-dom';
import { FaBars, FaTimes} from "react-icons/fa";
import { Link } from 'react-scroll';


const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <div className='header'>
        <h1 className='brand'>tindog</h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* <li>
                <Link to="/">Home</Link>
            </li> */}
            
            <li>
                <Link to="contact">Contact</Link>
            </li>
            <li>
                <Link to="pricing">Pricing</Link>
            </li>
            <li>
                <Link to="download">Download</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (
            <FaTimes size={20} style={{color: "white"}}/>
            ) : (
            <FaBars size={20} style={{color: "white"}}/>
            )}
        </div>
    </div>
  )
}

export default Navbar

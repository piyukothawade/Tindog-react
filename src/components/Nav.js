import React, { Component } from 'react';
import "./NavStyles.css";
import { Link } from 'react-scroll';

class Nav extends Component {

    state = { clicked: false };
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
  return (
    <>
    <nav>
        <a className='logo' href=''> tindog</a>
        <div>
            <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
                <li><a className='active' href=''>Home</a></li>
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
        </div>
        <div id='mobile' onClick={this.handleClick}>
            <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
    </nav>
      
    </>
  )
}
}

export default Nav

import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return(
        <ul className="navbar">
            <li><NavLink exact={true} to="/" className="navlink" activeClassName="active-link">HOME</NavLink></li>
            <li><NavLink to="/about" className="navlink" activeClassName="active-link">ABOUT</NavLink></li>
            <li><NavLink to="/portfolio" className="navlink" activeClassName="active-link">PROJECTS</NavLink></li>
            <li><NavLink to="/blog" className="navlink" activeClassName="active-link">BLOG</NavLink></li>
            <li><NavLink to="/contact" className="navlink" activeClassName="active-link">CONTACT</NavLink></li>
        </ul>
    )
}

export default NavBar
import React from 'react'
import {Link} from 'react-scroll'
// import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return(
        <ul className="navbar">
            <li><Link activeClass="active-link" className="navlink" to="home" spy={true} smooth={true}>HOME</Link></li>
            <li><Link activeClass="active-link" className="navlink" to="about" spy={true} smooth={true}>ABOUT</Link></li>
            <li><Link activeClass="active-link" className="navlink" to="projects" spy={true} smooth={true}>PROJECTS</Link></li>
            <li><Link activeClass="active-link" className="navlink" to="blog" spy={true} smooth={true}>BLOG</Link></li>
            <li><Link activeClass="active-link" className="navlink" to="contact" spy={true} smooth={true}>CONTACT</Link></li>
        </ul>
    )
}

export default NavBar


/* 
<ul className="navbar">
    <li><NavLink exact={true} to="/" className="navlink" activeClassName="active-link">HOME</NavLink></li>
    <li><NavLink to="/about" className="navlink" activeClassName="active-link">ABOUT</NavLink></li>
    <li><NavLink to="/portfolio" className="navlink" activeClassName="active-link">PROJECTS</NavLink></li>
    <li><NavLink to="/blog" className="navlink" activeClassName="active-link">BLOG</NavLink></li>
    <li><NavLink to="/contact" className="navlink" activeClassName="active-link">CONTACT</NavLink></li>
</ul>

*/
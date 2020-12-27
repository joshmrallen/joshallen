import React from 'react'
import {Link} from 'react-scroll'
// import {NavLink} from 'react-router-dom'

const NavBar = () => {

    const vanillaJSScrollTo = document.querySelector("#VANILLAJSSCROLLTO")
    const scroll = () => {
        vanillaJSScrollTo.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    }

    return(
        <ul className="navbar">
            <li><Link className="navlink" activeClass="active-link" to="home" spy={true} smooth={true} offset={-50}>HOME</Link></li>
            <li><Link className="navlink" activeClass="active-link" to="about" spy={true} smooth={true} offset={-50}>ABOUT</Link></li>
            <li><Link className="navlink" activeClass="active-link" to="projects" spy={true} smooth={true} offset={-50}>PROJECTS</Link></li>
            <li><Link className="navlink" activeClass="active-link" to="blog" spy={true} smooth={true} offset={-50}>BLOG</Link></li>
            <li><Link className="navlink" activeClass="active-link" to="contact" spy={true} smooth={true} offset={-50}>CONTACT</Link></li>
            <li className="navlink" onClick={scroll}>VANILLAJSSCROLLTO</li>
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
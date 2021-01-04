import React from 'react'
import {Link} from 'react-scroll'
// import {NavLink} from 'react-router-dom'
import Octocat from '../images/GitHub-Mark-Light-120px-plus.png'
import LinkedIn from '../images/linkedin-icon-linked-in-logo-white-png-hd_281270.png'
import Medium from '../images/Medium-Symbol-White-RGB@2x.png'
import Twitter from '../images/Twitter_Logo_WhiteOnImage.png'

const NavBar = () => {


    return(
        <ul className="navbar">
            <li><Link className="navlink" activeClass="active-link" to="home" spy={true} smooth={true} offset={-50}>HOME</Link></li>
            <li><Link className="navlink" activeClass="active-link" to="about" spy={true} smooth={true} offset={-50}>ABOUT</Link></li>
            <li><Link className="navlink" activeClass="active-link" to="projects" spy={true} smooth={true} offset={-50}>PROJECTS</Link></li>
            <li><Link className="navlink" activeClass="active-link" to="blog" spy={true} smooth={true} offset={-50}>BLOG</Link></li>
            <li><Link className="navlink" activeClass="active-link" to="contact" spy={true} smooth={true} offset={-50}>CONTACT</Link></li>
            <li className="hidden-li-padding-left"></li>
            <li>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/joshmrallen"><img className="link-image-navbar" src={Octocat} alt="github mark image" /></a>
            </li>
            <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joshmrallen/"><img className="link-image-navbar" src={LinkedIn} alt="LinkedIn 'In' logo" /></a>
            </li>
            <li>
                 <a target="_blank" rel="noopener noreferrer" href="https://jmrallen.medium.com/"><img className="link-image-navbar" src={Medium} alt="medium blog symbol" /></a>
            </li>
            <li>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/jmrallen"><img className="link-image-navbar" src={Twitter} alt="twitter logo" /></a>
            </li>
            {/* <li className="hidden-li-padding-right"></li> */}
        </ul>
    )
}

export default NavBar

/* 
onSetActive={handleSetActive} onSetInactive={handleSetInactive}

// const handleSetActive = (to) => {
    //     console.log(to.className)
    // }

    // const handleSetInactive = (to) => {
    //     console.log(to)
    // }


*/


/* 
<ul className="navbar">
    <li><NavLink exact={true} to="/" className="navlink" activeClassName="active-link">HOME</NavLink></li>
    <li><NavLink to="/about" className="navlink" activeClassName="active-link">ABOUT</NavLink></li>
    <li><NavLink to="/portfolio" className="navlink" activeClassName="active-link">PROJECTS</NavLink></li>
    <li><NavLink to="/blog" className="navlink" activeClassName="active-link">BLOG</NavLink></li>
    <li><NavLink to="/contact" className="navlink" activeClassName="active-link">CONTACT</NavLink></li>
</ul>

*/


/* 
const vanillaJSScrollTo = document.querySelector("#VANILLAJSSCROLLTO")
const scroll = (e) => {
    vanillaJSScrollTo.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })

    e.target.className = "clicked"
}


<li className="navlink" onClick={scroll}>VANILLAJSSCROLLTO</li>

*/



/* 

<ul>
    <li>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/joshmrallen"><img className="link-image" src={Octocat} alt="github mark image" /></a>
    </li>
    <li>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joshmrallen/"><img className="link-image" src={LinkedIn} alt="LinkedIn 'In' logo" /></a>
    </li>
    <li>
        <a target="_blank" rel="noopener noreferrer" href="https://jmrallen.medium.com/"><img className="link-image" id="medium" src={Medium} alt="medium blog symbol" /></a>
    </li>
    <li>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/jmrallen"><img className="link-image" src={Twitter} alt="twitter logo" /></a>
    </li>
</ul>


*/
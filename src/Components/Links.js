import React from 'react'
import Octocat from '../images/GitHub-Mark-Light-120px-plus.png'
import LinkedIn from '../images/linkedin-icon-linked-in-logo-white-png-hd_281270.png'
import Medium from '../images/Medium-Logo-White-RGB@2x.png'
import Twitter from '../images/Twitter_Logo_WhiteOnImage.png'

const Links = () => {

    return(
        <div>
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
        </div>
    )
}


export default Links
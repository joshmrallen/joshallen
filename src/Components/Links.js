import React from 'react'
import Octocat from '../images/GitHub-Mark-Light-120px-plus.png'
import LinkedIn from '../images/LI-In-Bug.png'
import Medium from '../images/Medium-Symbol-Black-RGB@4x.png'
import Twitter from '../images/Twitter_Logo_WhiteOnImage.png'

const Links = () => {

    return(
        <div>
            <ul>
                <li>
                    <img className="link-image" src={Octocat} alt="github mark image" />
                </li>
                <li>
                    <img className="link-image" src={LinkedIn} alt="LinkedIn 'In' logo" />
                </li>
                <li>
                    <img className="link-image" src={Medium} alt="medium blog symbol" />
                </li>
                <li>
                    <img className="link-image" src={Twitter} alt="twitter logo" />
                </li>
            </ul>
        </div>
    )
}


export default Links
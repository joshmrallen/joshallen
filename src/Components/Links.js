import React from 'react'
import Octocat from '../images/GitHub-Mark-Light-120px-plus.png'

const Links = () => {

    return(
        <div>
            <ul>
                <li>
                    <div>
                        <img className="link-image" src={Octocat} alt="github mark image" />
                    </div>
                </li>
            </ul>
        </div>
    )
}


export default Links
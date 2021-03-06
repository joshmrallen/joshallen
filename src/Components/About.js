import React from 'react'
import { Slide } from 'react-awesome-reveal'
import Links from './Links.js'

const About = () => {

    return(
        <div className="about" id='home'>
            <Slide cascade>
                <h1>
                    Josh Allen
                </h1>
                <hr></hr>
                <Links />
            </Slide>
            <div className="filler">

            </div>

            {/* <ul>
                <Slide cascade>
                    <li className="about-list">
                        Software Engineer, Full Stack Web Development
                    </li>
                    <li className="about-list">
                        Father
                    </li>
                    <li className="about-list">
                        Husband
                    </li>
                </Slide>
            </ul> */}

        </div>
    )
}

export default About
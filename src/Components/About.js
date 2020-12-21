import React from 'react'
import { Slide } from 'react-awesome-reveal'
import Links from './Links.js'
import Bio from './Bio.js'

const About = () => {

    return(
        <div className="about">
            <Slide cascade>
                <h1>
                    Josh Allen
                </h1>
                <Links />
                <Bio />
            </Slide>

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
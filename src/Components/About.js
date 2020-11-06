import React from 'react'
import { Slide } from 'react-awesome-reveal'

const About = () => {

    return(
        <div className="about">
            <h1>
                About Me
            </h1>
            <ul>
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
            </ul>

        </div>
    )
}

export default About
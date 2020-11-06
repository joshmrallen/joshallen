import React from 'react'
import { Slide } from 'react-awesome-reveal'

const Portfolio = () => {

    return(
        <>
            <div className="title gif1">
                <h1>Du It!</h1>
                <ul className="portfolio-list">
                    <Slide triggerOnce>
                        <li>
                            <a href="https://github.com/joshmrallen/du-it-client">GitHub</a>
                        </li>
                        <li>
                            <a href="https://youtu.be/VHXAkeIC1_0">Full Demo</a>
                        </li>
                    </Slide>
                </ul>
            </div>
            <div className="title gif2">
                <h1>Socialite</h1>
                <ul className="portfolio-list">
                    <Slide triggerOnce>
                        <li>
                            <a href="https://github.com/joshmrallen/socialite-client">GitHub</a>
                        </li>
                        <li>
                            <a href="https://youtu.be/ETSqu29uOGg">Full Demo</a>
                        </li>
                    </Slide>
                </ul>
            </div>
            <div className="title gif3">
                <h1>Wu KTV</h1>
                <ul className="portfolio-list">
                    <Slide triggerOnce>
                        <li>
                            <a href="https://github.com/joshmrallen/ktv-frontend">GitHub</a>
                        </li>
                        <li>
                            <a href="https://youtu.be/ocYz4YZop-k">Full Demo</a>
                        </li>
                    </Slide>
                </ul>
            </div>
        </>
    )
}

export default Portfolio
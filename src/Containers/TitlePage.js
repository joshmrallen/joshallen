import React from 'react'
import { Slide } from 'react-awesome-reveal'

const TitlePage = () => {
    return(
        <>
            <Slide triggerOnce>
                <div className="home">
                    <p id="name">Josh Maxwell Reiner Allen</p>
                    <div id="title-line"></div>
                    <p id="role">Full Stack Web Developer</p>
                </div>
            </Slide>
        </>
    )
}

export default TitlePage

/* 
    Add a ul of navlinks to show below the home div
    Slide effect: change to cascade so that the ul slides in after the name/role combo?
        Or perhaps have it fade in to differentiate it from the name/role combo
*/

/* 
if you try using the Slide tag inside of the grid, it messes up the positions
<>
            <Slide triggerOnce>
                <div className="home">
                    <p id="name">Josh Maxwell Reiner Allen</p>
                    <div id="title-line"></div>
                    <p id="role">Full Stack Web Developer</p>
                </div>
            </Slide>
        </>

*/
import React from 'react'
import Particles from 'react-particles'
import logo from './logo.svg';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import { Link, Element, Events, animateScroll as scroll, scrollspy, scroller } from 'react-scroll'
import NavBar from './Components/NavBar'
import TitlePage from './Containers/TitlePage'
import Portfolio from './Containers/Portfolio'
import About from './Components/About'
import Bio from './Components/Bio'
import Projects from './Containers/Projects'
import Blog from './Containers/Blog'
import Contact from './Containers/Contact'

class App extends React.Component {

  render(){
    return (
      <>
      <div className="App">
        
        <NavBar />
        <About />
        <Particles className="particles" />
        <Bio />
        <Particles className="particles" />
        <Projects />
        <Blog />
        <Particles className="particles" />
        <Contact />
        
        

        {/* <Element name="home">
          <About />
        </Element>

        <Element name="about">
          <Bio />
        </Element>

        <Element name="projects">
          <Projects />
        </Element>

        <Element name="blog">
          <Blog />
        </Element>
        
        <Element name="contact">
          <Contact />
        </Element> */}

      </div>
    </>
    );

  }
}

export default App;




/* 
<div id="VANILLAJSSCROLLTO">
  <h1>VANILLAJSSCROLLTO</h1>
</div>

*/







/* 

<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
</header>

*/
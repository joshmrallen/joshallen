import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import NavBar from './Components/NavBar'
import TitlePage from './Containers/TitlePage'
import Portfolio from './Containers/Portfolio'
import About from './Components/About'
import Bio from './Components/Bio'

class App extends React.Component {

  render(){
    return (
      <>
      <div className="App">
        <NavBar />
        <About />
        <Bio />
        <div className="main">
          
        </div>
      </div>
    </>
    );

  }
}

export default App;












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
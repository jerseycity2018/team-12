import React, { Component } from 'react';
import logo from './images.jpg';
import './App.css';
import Custom from './Custom.js';

class App extends Component {
  render() {
    return (
      

      <div class="container" className="App">


        <header className="App-header">

        <div row="col-xs-12 col-md-12" id="navbar">
        
        <button type="button" class="btn">Register</button>
        </div>

        <div row="col-xs-12 col-md-12">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <p>
            Edit <code>src/App.js</code> and save to relsdaklfj ak;lsdfj
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Custom myName="John"/>
          </div>
        </header>
      </div>//app
    ); // return
  }
}

export default App;

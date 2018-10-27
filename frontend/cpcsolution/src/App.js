import React, { Component } from 'react';
//import logo from './aerial.jpg'
import './App.css';
import Custom from './Custom.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1>
            Grow Our Family...
          </h1>
          <p>
            Through our experiences, laughter, and memories all shared on the same land under the same trees, Central 
            Park interconnects us all as one big family. Our lives are New York and Central Park is our heart, so let's
            keep it breathing... together.
          </p>
          <form>
            <label>
              Full Legal Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
            </form>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Custom myName="John"/>
        </header>
      </div>
    );
  }
}

export default App;
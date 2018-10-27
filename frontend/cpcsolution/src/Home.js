import React, { Component } from "react";
import Custom from './Custom.js';

import logo from './images.jpg';

class Home extends Component {
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
          </div>
        </header>
      </div>//app
    ); // return
  }
}

export default Home;

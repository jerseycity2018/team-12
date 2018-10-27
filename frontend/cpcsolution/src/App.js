import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Custom from './Custom.js';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
        </header>
      </div>
    );
  }
}

/*class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        return <div ref={this.myRef}
    }
}

class MyComponent extends React.Component {
    render() {
        return <div ref={ re => { this.myRef = re } }
    }
}

class MyComponent extends React.Component {
    scrollToDomRef = () => {
        const myDomNode = ReactDOM.findDOMNode(this.myRef.current)
        myDomNode.scrollIntoView()
    }
}
*/
export default App;

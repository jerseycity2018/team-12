import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import './main.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Experiences from "./Experiences";
import Donate from "./Donate";

class Main extends Component {
  render() {
    return (
     [ <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Central Park Conservancy
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem>
            Experience
          </NavItem>
          <NavItem>
            Donate
          </NavItem>
          <NavItem>
            Map
          </NavItem>
        </Nav>
      </Navbar>, 
      <HashRouter>
        <div>
           <h1>Visit Central Park!</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/experiences">Experiences</NavLink></li>
            <li><NavLink to="/donate">Donate</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path='/' component={Home}/>
            <Route path='/experiences' component={Experiences}/>
            <Route path='/donate' component={Donate}/>

          </div>
        </div>
     </HashRouter> ]
    );
  }
}

export default Main;

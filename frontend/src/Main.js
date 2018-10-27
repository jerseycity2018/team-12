import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
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
          <Navbar.Brand >
            <a href="#"><h3>Welcome to Central Park Conservancy!</h3></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#/experiences/">
            Experience
          </NavItem>
          <NavItem eventKey={2} href="#/donate/">
            Donate
          </NavItem>
          <NavItem>
            Map
          </NavItem>
        </Nav>
      </Navbar>, 
      <HashRouter>
        <div>
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

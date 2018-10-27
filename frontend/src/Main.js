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
import Analytics from "./Analytics";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div class="header">
            <h1>Welcome to Central Park...</h1>
            <img src="cpc.png"/>
          </div>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/experiences">Experiences</NavLink></li>
            <li><NavLink to="/donate">Donate</NavLink></li>
            <li><NavLink to="/analytics">Analytics</NavLink></li>

          </ul>
          <div className="content">
            <Route exact path='/' component={Home}/>
            <Route path='/experiences' component={Experiences}/>
            <Route path='/donate' component={Donate}/>
            <Route path='/analytics' component={Analytics}/>

          </div>
        </div>
        </HashRouter>
    );
  }
}

export default Main;

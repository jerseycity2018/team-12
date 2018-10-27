import React, {Component} from "react";
import {HashRouter, NavLink, Route} from 'react-router-dom';
import './main.css';
import Home from "./Home";
import Experiences from "./Experiences";
import Donate from "./Donate";
import Analytics from "./Analytics";

import {Nav, Navbar, NavItem} from "react-bootstrap";

class Main extends Component {
    render() {
        return (
            [<Navbar>
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
                        Mapnpm
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
            ]
        );
    }
}

export default Main;

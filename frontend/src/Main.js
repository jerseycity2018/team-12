import React, {Component} from "react";
import {HashRouter, NavLink, Route} from 'react-router-dom';
import './main.css';
import {Image} from 'react-bootstrap';
import img from './leaf.png';
import Home from "./Home";
import Experiences from "./Experiences";
import Donate from "./Donate";
import Analytics from "./Analytics";
import Map from "./Map";
import UserRegistration from "./UserRegistration";
import UserLogIn from "./UserLogIn";

// import {Nav, Navbar, NavItem} from "react-bootstrap";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div className={'navbar'}>
                    <h1>The Central Solution<Image src={img} style={{height: '40px', width: '40px'}}/></h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/experiences">Experiences</NavLink></li>
                        <li><NavLink to="/donate">Donate</NavLink></li>
                        <li><NavLink to="/analytics">Analytics</NavLink></li>
                        <li><NavLink to="/map">Map</NavLink></li>
                        <li><NavLink to="/login">Log In</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>

                    </ul>
                    <div className="content">
                        <Route exact path='/' component={Home}/>
                        <Route path='/experiences' component={Experiences}/>
                        <Route path='/donate' component={Donate}/>
                        <Route path='/analytics' component={Analytics}/>
                        <Route path='/map' component={Map}/>
                        <Route path='/login' component={UserLogIn} />
                        <Route path='/register' component={UserRegistration} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;

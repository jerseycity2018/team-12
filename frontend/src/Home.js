import React, {Component} from "react";
import Question from './Question.js';
import axios from 'axios';
import {Radio} from 'react-bootstrap';

class Home extends Component {
    state = {
        submitted: false
    };

    handleInputChange = (e) => {
        let change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    };

    handleSubmit = (event) => {
        axios.post('http://localhost:3001/register', this.state).then(console.log);
        this.setState({submitted: true});
    };


    render() {
        return (
            !this.state.submitted ? (
                <div>
                    <h2>Help Us Make Your Experience Better:</h2>
                    <form onSubmit={this.handleSubmit}>
                        <Question questionText="Gender:"/>
                        <ul className={'question-ul'}>
                            <li><input onChange={this.handleInputChange} type="radio" name="gender"
                                       value="female"/>Female
                            </li>
                            <li><input onChange={this.handleInputChange} type="radio" name="gender"
                                       value="male"/>Male
                            </li>
                        </ul>

                        <Question questionText="Where are you coming from?"/>
                        <ul className={'question-ul'}>
                            <li><input onChange={this.handleInputChange} type="radio" name="outOfState"
                                       value="false"/>New York
                            </li>
                            <li><input onChange={this.handleInputChange} type="radio" name="outOfState"
                                       value="true"/>Not New York
                            </li>
                        </ul>

                        <Question questionText="What did you do in the park?"/>
                        <ul className={'question-ul'}>
                            <li><input onChange={this.handleInputChange} type="radio" name="activity"
                                       value="leisure"/>Leisure
                            </li>
                            <li><input onChange={this.handleInputChange} type="radio" name="activity"
                                       value="walking_dog"/>Walking my dog
                            </li>
                            <li><input onChange={this.handleInputChange} type="radio" name="activity"
                                       value="sports"/>Sports
                            </li>
                            <li><input onChange={this.handleInputChange} type="radio" name="activity"
                                       value="events"/>Park Events
                            </li>
                        </ul>

                        <Question questionText="Was it your first time in the park?"/>
                        <ul className={'question-ul'}>
                            <li><input onChange={this.handleInputChange} type="radio" name="firstTime"
                                       value="true"/>Yes
                            </li>
                            <li><input onChange={this.handleInputChange} type="radio" name="firstTime"
                                       value="false"/>No
                            </li>
                        </ul>

                        <Question questionText="What part of the park did you visit?"/>
                        <ul className={'question-ul'}>
                            <li><input onChange={this.handleInputChange} type="radio" name="part"
                                       value="north"/>North
                            </li>
                            <li><input onChange={this.handleInputChange} type="radio" name="part"
                                       value="south"/>South
                            </li>
                            <li><input onChange={this.handleInputChange} type="radio" name="part"
                                       value="west"/>West
                            </li>
                            <li><input onChange={this.handleInputChange} type="radio" name="part"
                                       value="east"/>East
                            </li>
                        </ul>
                        <input type="submit" value="Submit"/>


                    </form>
                </div>
            ) : (
                <div>
                    Thank You!
                </div>
            )

        );
    }

}

export default Home;

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
        axios.post('http://localhost:3000/register/br', this.state);
        this.setState({submitted: true});
    };


    render() {
        return (
            !this.state.submitted ? (
            <div>
                <h2>Survey</h2>
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

                    <Question questionText="Residency:"/>
                    <ul className={'question-ul'}>
                        <li><input onChange={this.handleInputChange} type="radio" name="outOfState"
                                   value="false"/>New York
                        </li>
                        <li><input onChange={this.handleInputChange} type="radio" name="outOfState"
                                   value="true"/>Not New York
                        </li>
                    </ul>

                    <Question questionText="Reason for visit:"/>
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

                    <Question questionText="Frequent visitor:"/>
                    <ul className={'question-ul'}>
                        <li><input onChange={this.handleInputChange} type="radio" name="firstTime"
                                   value="true"/>Yes
                        </li>
                        <li><input onChange={this.handleInputChange} type="radio" name="firstTime"
                                   value="false"/>No
                        </li>
                    </ul>

                    <Question questionText="Area of park that was visited:"/>
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
<<<<<<< HEAD

  handleSubmit(event) {
    alert('Your survey is submitted! ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return (

        <div>
          <h2>Help Us Make Your Experience Better:</h2>
        <form onSubmit={this.handleSubmit}>
        <Question questionText="Gender:"/>
         <ul>
          <li><input onChange={this.handleInputChange.bind(this)} type="radio" name="gender" value="female" />Female</li>
          <li><input onChange={this.handleInputChange.bind(this)} type="radio" name="gender" value="male" />Male</li>
          <li><input onChange={this.handleInputChange.bind(this)} type="radio" name="gender" value="other" />Other</li>
        </ul>

        <Question questionText="Age:"/>
         <ul>
          <li><input onChange={this.handleInputChange.bind(this)} type="radio" name="age" value="teenage"/>12-18</li>
          <li><input onChange={this.handleInputChange.bind(this)} type="radio" name="age" value="youngAdult"/>19-30</li>
          <li><input onChange={this.handleInputChange.bind(this)} type="radio" name="age" value="adult" />31-52</li>
          <li><input onChange={this.handleInputChange.bind(this)} type="radio" name="age" value="senior" />53-65+</li>
        </ul>

        <Question questionText="Residency:"/>
         <ul>
          <li><input onChange={this.handleInputChange.bind(this)} type="radio" name="origin" value="ny" />New York</li>
          <li><input onChange={this.handleInputChange.bind(this)} type="radio" name="origin" value="notNy" />Not New York</li>
        </ul>


         <Question questionText="Reason for visit:"/>
         <ul>
          <li><input onChange={this.handleInputChange.bind(this)} type="checkbox" name="activity" value="leisure" />Leisure</li>
          <li><input onChange={this.handleInputChange.bind(this)} type="checkbox" name="activity" value="walking_dog" />Walking my dog</li>
          <li><input onChange={this.handleInputChange.bind(this)} type="checkbox" name="activity" value="sports" />Sports</li>
          <li><input onChange={this.handleInputChange.bind(this)} type="checkbox" name="activity" value="events" />Park Events</li>
          </ul>

         <Question questionText="Frequent visitor:"/>
         <ul>
          <li><input onChange={this.handleInputChange.bind(this)} type="radio" name="freq" value="yes" />Yes</li>
          <li><input onChange={this.handleInputChange.bind(this)} type="radio" name="freq" value="no" />No</li>
        </ul>

         <Question questionText="Area of the park that was visited:"/>
         <ul>
          <li><input onChange={this.handleInputChange.bind(this)} type="radio" name="location" value="north" />North</li>
          <li><input onChange={this.handleInputChange.bind(this)} type="radio" name="location" value="south" />South</li>
          <li><input onChange={this.handleInputChange.bind(this)} type="radio" name="location" value="west" />West</li>
          <li><input onChange={this.handleInputChange.bind(this)} type="radio" name="location" value="east" />East</li>
        </ul>
        <input type="submit" value="Submit" />


         </form>
        </div>

    );
  }
=======
>>>>>>> b59111f8721b35802bad71540ad67bab8ae9b8e1
}

export default Home;

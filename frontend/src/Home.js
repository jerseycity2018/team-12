import React, { Component } from "react";
import Question from './Question.js';
class Home extends Component {


  handleInputChange(e) {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)

    }

  handleSubmit(event) {
    alert('Your survey is submitted! ' + this.state.value);
    event.preventDefault();
  }
  
  
  render() {
    return (

        <div>
          <h2>Survey</h2>
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

        <Question questionText="Where are you coming from?"/>
         <ul>
          <li><input onChange={this.handleInputChange.bind(this)} type="radio" name="origin" value="ny" />New York</li>
          <li><input onChange={this.handleInputChange.bind(this)} type="radio" name="origin" value="notNy" />Not New York</li>
        </ul>

         <Question questionText="Where are you coming from?"/>
         <ul>
          <li><input onChange={this.handleInputChange.bind(this)} type="radio" name="origin" value="ny" />New York</li>
          <li><input onChange={this.handleInputChange.bind(this)} type="radio" name="origin" value="notNy" />Not New York</li>
        </ul>

         <Question questionText="What did you do in the park?"/>
         <ul>
          <li><input onChange={this.handleInputChange.bind(this)} type="checkbox" name="activity" value="leisure" />Leisure</li>
          <li><input onChange={this.handleInputChange.bind(this)} type="checkbox" name="activity" value="walking_dog" />Walking my dog</li>
          <li><input onChange={this.handleInputChange.bind(this)} type="checkbox" name="activity" value="sports" />Sports</li>
          <li><input onChange={this.handleInputChange.bind(this)} type="checkbox" name="activity" value="events" />Park Events</li>
          </ul>
         
         <Question questionText="Was it your first time in the park?"/>
         <ul>
          <li><input onChange={this.handleInputChange.bind(this)} type="radio" name="freq" value="yes" />Yes</li>
          <li><input onChange={this.handleInputChange.bind(this)} type="radio" name="freq" value="no" />No</li>
        </ul>

         <Question questionText="What part of the park did you visit?"/>
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
}

export default Home;

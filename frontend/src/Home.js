import React, { Component } from "react";
import Question from './Question.js';
class Home extends Component {
  
  render() {
    return (

        <div>
          <h2>Survey</h2>
        <form>
         <Question questionText="Where are you coming from?"/>


         <Question questionText="What did you do in the park?"/>
         <ul>
          <li><input onChange={this.handleActivityChange} type="checkbox" name="activity" value="leisure" />Leisure</li>
          <li><input onChange={this.handleActivityChange} type="checkbox" name="activity" value="walking_dog" />Walking my dog</li>
          <li><input onChange={this.handleActivityChange} type="checkbox" name="activity" value="sports" />Sports</li>
          <li><input onChange={this.handleActivityChange} type="checkbox" name="activity" value="events" />Park Events</li>
          </ul>
         
         <Question questionText="Was it your first time in the park?"/>
         <Question questionText="What part of the park did you visit?"/>
         </form>
        </div>

    );
  }
}

export default Home;

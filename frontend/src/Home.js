import React, { Component } from "react";
import Question from './Question.js';
class Home extends Component {
  
  render() {
    return (

        <div>
          <h2>Survey</h2>
        <form>
         <Question questionText="Where are you coming from?"/>
         <ul>
          <li><input onChange={this.handleOriginChange} type="radio" name="origin" value="ny" />New York</li>
          <li><input onChange={this.handleOriginChange} type="radio" name="origin" value="notNy" />Not New York</li>
        </ul>

         <Question questionText="What did you do in the park?"/>
         <ul>
          <li><input onChange={this.handleActivityChange} type="checkbox" name="activity" value="leisure" />Leisure</li>
          <li><input onChange={this.handleActivityChange} type="checkbox" name="activity" value="walking_dog" />Walking my dog</li>
          <li><input onChange={this.handleActivityChange} type="checkbox" name="activity" value="sports" />Sports</li>
          <li><input onChange={this.handleActivityChange} type="checkbox" name="activity" value="events" />Park Events</li>
          </ul>
         
         <Question questionText="Was it your first time in the park?"/>
         <ul>
          <li><input onChange={this.handleFreqChange} type="radio" name="freq" value="yes" />Yes</li>
          <li><input onChange={this.handleFreqChange} type="radio" name="freq" value="no" />No</li>
        </ul>

         <Question questionText="What part of the park did you visit?"/>
         <ul>
          <li><input onChange={this.handleLocationChange} type="radio" name="location" value="north" />North</li>
          <li><input onChange={this.handleLocationChange} type="radio" name="location" value="south" />South</li>
          <li><input onChange={this.handleLocationChange} type="radio" name="location" value="west" />West</li>
          <li><input onChange={this.handleLocationChange} type="radio" name="location" value="east" />East</li>
        </ul>

         </form>
        </div>

    );
  }
}

export default Home;

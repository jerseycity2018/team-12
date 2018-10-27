import React, { Component } from "react";
import Question from './Question.js';
class Home extends Component {
  
  render() {
    return (

        <div>
          <h2>Survey</h2>

         <Question questionText="Where are you coming from?"/>
         <Question questionText="What did you do in the park?"/>
         <Question questionText="Was it your first time in the park?"/>
         <Question questionText="What part of the park did you visit?"/>

        </div>

    );
  }
}

export default Home;

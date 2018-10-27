import React, { Component } from "react";
import './experienceBoxes.css';
class Experience extends React.Component {
    render() {
      return <li>
      <div class="right">
        <p>{this.props.Time}</p>
      </div>
      <img src={this.props.imageSrc}/>
      <div class="left"><h1> {this.props.Title} </h1>

      <p>{this.props.Descr}</p></div>

      </li>;
    }
}

export default Experience

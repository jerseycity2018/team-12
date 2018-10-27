import React, { Component } from "react";
import './experienceBoxes.css';
class Experience extends React.Component {
    render() {
      return <li>
      <img src={this.props.imageSrc}/>
      <h1> {this.props.Title} </h1>
      <p>{this.props.Descr}</p>
      </li>;
    }
}

export default Experience

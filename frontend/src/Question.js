import React, { Component } from "react";

class Question extends React.Component {
    render() {
      return <p>{this.props.questionText}</p>;
    }
}

export default Question

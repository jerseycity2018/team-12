import React, { Component } from 'react';

class Custom extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        HELLO {this.props.myName}
      </div>
    );
  }
}

export default Custom;

import React, {Component} from "react"

class Form extends React.Component{
  render(){
    return <form>
        <label>
            {this.props.questionText}
            <input type="text" name={this.props.name} />
        </label>
    </form>
  }
}

export default Form

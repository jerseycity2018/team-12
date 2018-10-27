import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Form from './Form.js'
import "./Donate.css";

class Donate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            donation: "",
            nameOnCard: "",
            cardNumber: "",
            cvc: "",
            expirationDate: ""
        };
    }

    validateForm() {
        return this.state.firstName.length > 0 && this.state.lastName.length > 0 &&
            this.state.nameOnCard.length > 0 && this.state.cvc.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <h1>
                    Grow Our Family...
                </h1>
                <p>
                    Through our experiences, laughter, and memories all shared on the same land under the same trees, Central
                    Park interconnects us all as one big family. Our lives are New York and Central Park is our heart, so let's
                    keep it breathing... together.
                </p>
               
            <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="firstName" bsSize="large">
                <ControlLabel>First Name</ControlLabel>
                <FormControl
                    autoFocus
                    type="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                />
                </FormGroup>
                <FormGroup controlId="lastName" bsSize="large">
                <ControlLabel>Last Name</ControlLabel>
                <FormControl
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    type="lastName"
                />
            </FormGroup>
            <FormGroup controlId="donation" bsSize="large">
                <ControlLabel>Donation Amount</ControlLabel>
                <FormControl
                    value={this.state.donation}
                    onChange={this.handleChange}
                    type="donation"
                />
            </FormGroup>
            <div className="text">
                <p>Please enter your credit card information in the following section.</p>
            </div>
            <FormGroup controlId="nameOnCard" bsSize="large">
                <ControlLabel>Name on Card</ControlLabel>
                <FormControl
                    value={this.state.nameOnCard}
                    onChange={this.handleChange}
                    type="nameOnCard"
                />
            </FormGroup>
            <FormGroup controlId="cardNumber" bsSize="large">
                <ControlLabel>Card Number</ControlLabel>
                <FormControl
                    value={this.state.cardNumber}
                    onChange={this.handleChange}
                    type="cardNumber"
                />
            </FormGroup>
            <FormGroup controlId="cvc" bsSize="large">
                <ControlLabel>CVC</ControlLabel>
                <FormControl
                    value={this.state.cvc}
                    onChange={this.handleChange}
                    type="cvc"
                />
            </FormGroup>
            <FormGroup controlId="expirationDate" bsSize="large">
                <ControlLabel>Expiration Date</ControlLabel>
                <FormControl
                    value={this.state.expirationDate}
                    onChange={this.handleChange}
                    type="expirationDate"
                />
            </FormGroup>
            <Button
                block
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit"
            >
                Submit
            </Button>
            </form>

            </div>
        );
    }

}

export default Donate;

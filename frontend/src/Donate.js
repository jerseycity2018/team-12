import React, { Component } from "react";
import Form from './Form.js'
class Donate extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <h1>
                        Grow Our Family...
                    </h1>
                    <p>
                        Through our experiences, laughter, and memories all shared on the same land under the same trees, Central
                        Park interconnects us all as one big family. Our lives are New York and Central Park is our heart, so let's
                        keep it breathing... together.
                    </p>
                    <Form questionText = "First Name:" name = "fname"/>
                      <Form questionText = "Last Name:" name = "lname"/>
                        <Form questionText = "Donation Amount:" name = "fname"/>
                          <p>Please enter your credit card information in the following section.</p>
                          <Form questionText = "Name on Card:" name = "cname"/>
                            <Form questionText = "Card Number:" name = "cnum"/>
                              <Form questionText = "CVC:" name = "cvc"/>
                                <Form questionText = "Expiration Date:" name = "expdate"/>
                        <input type="submit" value="Submit" />
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    </a>

                </header>

            </div>
        );
    }

}

export default Donate;

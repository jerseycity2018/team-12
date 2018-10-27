import React, { Component } from "react";
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
          <form>
            <label>
              First Name:
              <input type="text" name="fname" />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <form>
            <label>
              Last Name:
              <input type="text" name="lname" />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <form>
            <label>
              Donation Amount:
              <input type="text" name="amt" />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <p>Please enter your credit card information in the following section.</p>
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
       </a>
       <Cards
      number={input.number.value}
      name={input.name.value}
      expiry={input.expiry.value}
      cvc={input.cvc.value}
      focused={state.focused}
    />
        </header>

      </div>
    );
  }

}

export default Donate;

import React, { Component } from "react";



class UserRegistration extends Component {
    render() {
         return(
            <div className="App">
                <header className="App-header">
                
                <h1>Welcome Joining Us!</h1>
                <form>
                    <label>
                        Username:
                        <input type="text" name="frame" />
                    </label>
                </form>
                <form>
                    <label>
                        Email:
                        <input type="text" name="frame" />
                    </label>
                </form>
                <form>
                    <label>
                        Password:
                        <input type="password"  id="myPassword" />
                    </label>
                </form>
                <input type="submit" value="Submit" />
                

                </header>
            </div>
         );
    }
}

export default UserRegistration;
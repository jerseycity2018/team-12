import React, { Component } from "react";

class UserLogIn extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Log In</h1>

                    <form>
                        <label>
                            Email:
                            <input type="text" name="frame" />
                        </label>
                    </form>
                    <form>
                        <label>
                            Password:
                            <input type="password" name="frame" />
                        </label>
                    </form>

                    <input type="submit" value="Log In" />
                </header>
            </div>
        );
    }
}

export default UserLogIn;
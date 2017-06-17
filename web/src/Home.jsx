import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Results from "./Results";
import Login from "./Login";
import Register from "./Register";
import { Search } from "semantic-ui-react";

class Home extends Component {
  state = {
    authenticated: false,
    user: {}
  };
  render() {
    return (
      <div>
        <div className="welcome">
        {this.state.user.name ? <div>Welcome, {this.state.user.name}</div> : <div> Welcome to Tutor! </div>}
        </div>
        <Search className="customSearch" />
        {this.state.authenticated
          ? <Results user={this.state.user} />
          : <div className="authContainer"><Register /><div className="divider" /><Login /></div>}
      </div>
    );
  }
}

export default Home;

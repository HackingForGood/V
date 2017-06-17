import React, { Component } from "react";
import { Search } from "semantic-ui-react";

import Results from "./Results";
import Login from "./Login";
import Register from "./Register";

class Home extends Component {
  state = {
    authenticated: false,
    user: {}
  };
  render() {
    return (
      <div>
        <div className="welcome">
        {this.state.user.name ? <div>Welcome, <span className="brand">{this.state.user.name}</span></div> : <div> Welcome to <span className="brand">Tutor!</span> </div>}
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

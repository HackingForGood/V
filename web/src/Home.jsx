import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Results from "./Results";
import Login from "./Login";
import Register from "./Register";
import { Search, Menu } from "semantic-ui-react";

class Home extends Component {
  state = {
    authenticated: false,
    results: { name: "Tom", age: 39 }
  };
  render() {
    return (
      <div>
        <Menu>
          <Menu.Item> Tutor! </Menu.Item>
        </Menu>
        <Search className="customSearch" />
        {this.state.authenticated
          ? <Results results={this.state.results} />
          : <div className="authContainer"><Register /><div className="divider" /><Login /></div>}
      </div>
    );
  }
}

export default Home;

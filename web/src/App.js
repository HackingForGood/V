import React, { Component } from "react";
import logo from "./logo.svg";
import Home from "./Home";
import "./App.css";
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;

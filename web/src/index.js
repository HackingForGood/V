import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Nav from "./Nav";
import Profile from "./Profile";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <div>
  <Nav />
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/user/:username" component={Profile} />
    </Switch>
  </Router>
  </div>,
  document.getElementById("root")
);
registerServiceWorker();

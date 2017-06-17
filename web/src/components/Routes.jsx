import React from "react";
import App from "../components/App";
import Nav from "../components/Nav";
import Profile from "../views/Profile";
import Tutor from "../views/Tutor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => (
  <div>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/user/:username" component={Profile} />
          <Route exact path="/tutor" component={Tutor} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default Routes;

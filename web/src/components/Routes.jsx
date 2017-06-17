import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "../components/App";
import Nav from "../components/Nav";
import Search from '../views/Results';
import Tutor from "../views/Tutor";
import Profile from "../views/Profile";

const Routes = () => (
  <div>
    <Nav />
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/user/:id" component={Profile} />
        <Route exact path="/tutor" component={Tutor} />
      </Switch>
    </Router>
  </div>
);

export default Routes;

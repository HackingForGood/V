import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();

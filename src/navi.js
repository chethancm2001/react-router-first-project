import React from "react";
import App from "./App";
import Hom from "./home";
import About from "./about";
import Nav from "./nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function Oute() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Hom} />
        <Route path="/about" component={About} />
        <Route path="/app" component={App} />
      </Switch>
    </Router>
  );
}

export default Oute;

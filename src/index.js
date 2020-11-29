import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Oth from "./navi";
import Nav from "./nav";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <Oth />
  </div>,
  rootElement
);

import React from "react";
import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import "../src/css/Home/index.scss";

ReactDOM.render(
  <HashRouter> 
    <App />
  </HashRouter>,
  document.getElementById("root")
);

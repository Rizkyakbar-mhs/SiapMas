import React from "react";
import ReactDOM from "react-dom";
import Index from "./home/index";
import MyImage from "./assets/dog.jpg";
import './index.css';
import { Route,Link, Switch } from "react-router-dom";

function App () {
  return (
    <Index />
  );
};

ReactDOM.render(<App />, document.getElementById("root"));


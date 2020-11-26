import React from "react";
import ReactDOM from "react-dom";
import Index from "./home/index";
import Home from "./home/home";
import MyImage from "./assets/dog.jpg";
import { Route,Link, Switch } from "react-router-dom";

function App () {
  return (
    <Index />
  );
};



ReactDOM.render(<App />, document.getElementById("root"));


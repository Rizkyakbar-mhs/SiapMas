import React from "react";
import ReactDOM from "react-dom";
import index from "./home/index";
import MyImage from "./assets/dog.jpg";
import './index.css';
import { Route,Link, Switch } from "react-router-dom";

function App () {
  return (
    <div>
      <index />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));


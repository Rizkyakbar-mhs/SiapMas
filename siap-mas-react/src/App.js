import React from "react";
import ReactDOM from "react-dom";
import Index from "./home/index";
import Home from "./home/home";
import { BrowserRouter as Router,Link, Switch, Router } from "react-router-dom";

function App () {
  return (
    <Router>
    <switch>
      <Route path="/home/index" home={Index}/>
      <Route path="/Home" home={Home}/>

    </switch>
    </Router>

  );
};



ReactDOM.render(<App />, document.getElementById("root"));
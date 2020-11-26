import React, { Component } from "react";
import Login from "./home/Login";
import Dashboard from './dashboard/Dashboard';
import { BrowserRouter,Link, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return(
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/Home"  component={Dashboard}/>
        </Switch>
    </BrowserRouter>
    )
  }
}



export default App;
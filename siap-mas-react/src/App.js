import React, { Component } from 'react'
import Login from "./home/Login";
import Dashboard from './dashboard/index';
import { BrowserRouter,Link, Switch, Route } from "react-router-dom";
import LupaPassword from './home/LupaPass';
import Obt from './dashboard/Obat_genre';
import Inpt from './Input/input_regis';
class App extends Component {
  render(){
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/Home"  component={Dashboard}/>
            <Route path="/LupaPassword" component={LupaPassword} />
            <Route path="/obat" component={Obt} />
            <Route path="/regis" component={Inpt} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react'
import Login from "./home/Login";
import Dashboard from './dashboard/index';
import { BrowserRouter,Link, Switch, Route, Redirect } from "react-router-dom";
import LupaPassword from './home/LupaPass';
import Obt from './dashboard/Obat_genre';
import { connect } from 'react-redux'
import Inpt from './Input/input_regis';
import Pr from './output/profile';
class App extends Component {
  render(){
    const { auth } = this.props;
    console.log(auth);
    const links =  auth.uid ? <LoginLinks /> : <NotLoginLinks /> ;
    return (
        <div>
          {links}
        </div>
    );
  }
}

const LoginLinks = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/obat" component={Obt} />
        <Route path="/regis" component={Inpt} />
        <Route path="/profile" component={Pr} />
        {/* <Route path="*"><Redirect to="/" /></Route> */}
      </Switch>
  </BrowserRouter>
);
}

const NotLoginLinks = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/LupaPassword" component={LupaPassword} />
        {/* <Route path="*"><Redirect to="/" /></Route> */}
      </Switch>
  </BrowserRouter>
);
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(App);

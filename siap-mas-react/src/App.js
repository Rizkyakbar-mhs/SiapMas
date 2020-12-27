import React, { Component } from 'react'
import Login from "./home/Login";
import Dashboard from './dashboard/index';
import { BrowserRouter,Link, Switch, Route, Redirect } from "react-router-dom";
import LupaPassword from './home/LupaPass';
import Obt from './dashboard/Obat_genre';
import { connect } from 'react-redux'
import Inpt from './Input/input_regis';
import DataObat from './Input/dataObat';
import Pr from './output/profile';
import DaftarObat from './dashboard/DaftarObat';
import EditPr from './Input/EditProfile';
import Report from './output/Report';
import DetailObat from './dashboard/DetailObat';
import About from './output/About';

class App extends Component {
  render(){
    const { auth } = this.props;
    console.log(auth);
    const session = auth;
    localStorage.setItem('userLogin', JSON.stringify(session));
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
        <Route path="/DaftarObat" component={DaftarObat} />
        <Route path="/DataObat"   component={DataObat}/>
        <Route path="/EditProfile" component={EditPr}/>
        <Route path="/Report"   component={Report}/>
        <Route path="/DetailObat"   component={DetailObat}/>
        <Route path="/About" component={About} />


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

import React,{ Component } from "react";
import { motion, useTransform } from "framer-motion";
import Login from "./Login";
import LoginApi from './LoginApi';

class LoginPage extends Component {

    render() {
        return(   
            <div>
            <Login />
            </div>
        )
    }
}

export default LoginPage;

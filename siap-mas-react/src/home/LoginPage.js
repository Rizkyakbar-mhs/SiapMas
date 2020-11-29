import React,{ Component } from "react";
import { motion, useTransform } from "framer-motion";
import Login from "./Login";
import LoginApi from './LoginApi';

class LoginPage extends Component {

    componentDidMount() {
        document.title = "SIAPMAS - MAIN"
    }
    render() {
        return(   
            <div>
            <Login />
            </div>
        )
    }
}

export default LoginPage;

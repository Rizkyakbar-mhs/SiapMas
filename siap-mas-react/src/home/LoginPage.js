import React,{ Component } from "react";
import Login from "./Login";

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

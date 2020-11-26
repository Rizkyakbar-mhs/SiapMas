import React,{ Component } from "react";
import { motion, useTransform } from "framer-motion";
import Login from "./Login";
import axios from 'axios';

class LoginPage extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            Users : [],
            isLoading: true
        }
    }

    componentDidMount() {
        axios.get('http://localhost:1337/user')
             .then((response) => {
                 const Users = response.data;
                 this.setState ({ Users });
                 console.log(Users);
             })        
             .catch((error) => {
                 console.log(error);
             });
    }

    render() {
        const { Users } = this.state;
        const UserData = Users.length ? ( Users.map(User => { 
            return(
        <li key={User.NIP}>{User.Name}</li>
            );
        })) : (
            <li>Belum Ada</li>
        );
        return(   
            <div>
            { UserData }
            </div>
        )
    }
}

export default LoginPage;

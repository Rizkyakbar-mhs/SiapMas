import React, { Component } from 'react';
import baseUrl from '../config/Base';

export default class LogiApi extends Component{
    
    constructor(props) {
        super(props);

        this.state = {
            Users : [],
            isLoading: true
        }
    }

    componentDidMount() {
        baseUrl.get('/user')
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
            </div>
            )
    }

}


        
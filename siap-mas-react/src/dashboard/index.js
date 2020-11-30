import React, { Component } from 'react'
import "./index.css";
import Dash from './Dashboard';

class Dashboard extends Component {
    componentDidMount(){
        document.title = "SIAPMAS - HOME";
        document.body.className = "backgroundHome";
    }
    render() {
        return(
            <div>
                <Dash />
            </div>
        )
    }
}

export default Dashboard;
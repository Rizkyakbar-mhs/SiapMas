import React, { Component } from 'react'
import "./index.css";

class Dashboard extends Component {
    componentDidMount(){
        document.title = "SIAPMAS - HOME";
        document.body.className = "backgroundHome";
    }
    render() {
        return(
            <div>
                Welcome :)
            </div>
        )
    }
}

export default Dashboard;
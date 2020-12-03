import React, { Component } from 'react'
import "./index.css";
import { connect } from 'react-redux';
import Dash from './Dashboard';

class Dashboard extends Component {
    componentDidMount(){
        document.title = "SIAPMAS - HOME";
        document.body.className = "backgroundHome";
    }

    componentWillUnmount(){
        document.body.className = "";
    }
    render() {
            console.log(this.props);
        return(
            <div>
                <Dash />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.product.products
    }
   }

export default connect(mapStateToProps)(Dashboard);
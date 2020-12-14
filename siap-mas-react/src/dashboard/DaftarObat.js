import React, { Component } from 'react'
import './DaftarObat.css';

class DaftarObat extends Component {
    state = {

    }

    componentDidMount() {
        document.title = "SIAPMAS - Daftar Obat";
        document.body.className = "backgroundHome";
    }
    render() {
        return(
            <div>
                <div className="Name">
                    Name
                </div>
                <div className="Qty">
                    Qty
                </div>
                <div className="Type">
                    Type
                </div>
                <div className="Price">
                    Price
                </div>
                <div className="GrandPrice">
                    Grand Price
                </div>
                <div className="ExpDate">
                    Expired Date
                </div>
            </div>
        )
    }
}

export default DaftarObat;
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './DaftarObat.css';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import ProductList from './ProductList'
import DeleteObat from '../store/actions/DeleteObat'
class DaftarObat extends Component {
    state = {  
            Id: ''
      }

    handleClick = (e) => {
        console.log(e)
        console.log(this.state)
        this.setState({
        Id: e.target.value
    }, () => {this.props.DeleteObat(this.state);})
    }

    componentDidMount() {
        document.title = "SIAPMAS - Daftar Obat";
        document.body.className = "backgroundHome";
    }
    render() {
        const { products } = this.props;
        console.log(this.state);
        return(
            <div>
                <table class="rwd-table">
  <tr>
      <th>Name</th>
      <th>Qty</th>
      <th>Type</th>
      <th>Price</th>
      <th>Grand Price</th>
      <th>Exp Date</th>
      <th>Action</th>

      </tr>
      { products && products.map(product => {
        console.log()
        return (
            <tr key={product.id}>
                <td data-th="Name">{product.Name}</td>
                <td data-th="Qty">{product.Qty}</td>
                <td data-th="Type">{product.Qty}</td>
                <td data-th="Price">{product.Price}</td>
                <td data-th="Grand Price">{product.Price}</td>
                <td data-th="Exp Date">{product.Date}</td>
                <td data-th="Exp Date">
                <Link to="/DetailObat"><button>Detail</button></Link>
                <button value={product.id} onClick={this.handleClick}>Delete</button>
                </td>
            </tr>
        )
      })}  
    </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.firestore.ordered.obat

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        DeleteObat:(ObatId) => dispatch(DeleteObat(ObatId))

    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'obat' }
      ])
)(DaftarObat);
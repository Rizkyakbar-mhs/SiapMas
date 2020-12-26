import React, { Component } from 'react'
import './DaftarObat.css';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import ProductList from './ProductList'
class DaftarObat extends Component {
    state = {

    }

    componentDidMount() {
        document.title = "SIAPMAS - Daftar Obat";
        document.body.className = "backgroundHome";
    }
    render() {
        const { products } = this.props;
        return(
            <div>
                <ProductList products={products} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        products: state.firestore.ordered.obat
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'obat' }
      ])
)(DaftarObat);
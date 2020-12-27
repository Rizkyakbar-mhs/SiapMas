import React, { Component } from 'react'
import './Report.css';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import ProductList from '../dashboard/ProductList'

class Report extends Component {
    state = {

    }

    componentDidMount() {
        document.title = "SIAPMAS - Report";
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
)(Report);
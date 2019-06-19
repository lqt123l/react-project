import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllSavedProducts } from './../reducers/index';

class SavedProducts extends Component {
    render() { 
        const { savedProductsList} = this.props;
        return ( 
            <div>
                <h3>Saved products</h3>
                {savedProductsList.map((savedProduct) => <span>{savedProduct.productName}</span>)}
            </div>
         );
    }
}

const mapStatesToProps = (state) => {
    return {
        state: state,
        savedProductsList:getAllSavedProducts(state)
    }
}
 
SavedProducts = withRouter(connect(mapStatesToProps, null)(SavedProducts));

export default SavedProducts;


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllSavedProducts } from './../reducers/index';
import SavedItemBlock from './savedItemBlock';

class SavedProducts extends Component {
    render() { 
        const { savedProductsList} = this.props;
        return ( 
            <div>
                <h3>Saved products</h3>
                {savedProductsList.map((savedProduct,index) => <SavedItemBlock key={index} product={savedProduct}></SavedItemBlock>)}
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


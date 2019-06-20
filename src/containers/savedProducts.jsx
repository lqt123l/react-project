import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllSavedProducts } from './../reducers/index';
import SavedItemBlock from './savedItemBlock';
import * as actions from './../actions/index';

class SavedProducts extends Component {
    render() {
        const { savedProductsList, deleteSave } = this.props;
        return (
            <div>
                <h3>Saved products</h3>
                {savedProductsList.map((savedProduct, index) =>
                    <div key={index}>
                        <SavedItemBlock product={savedProduct}></SavedItemBlock>
                        <button onClick = {() => deleteSave(savedProduct.id)}>Delete/Finish</button>
                    </div>
                )}
            </div>
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        state: state,
        savedProductsList: getAllSavedProducts(state)
    }
}

SavedProducts = withRouter(connect(mapStatesToProps, actions)(SavedProducts));

export default SavedProducts;


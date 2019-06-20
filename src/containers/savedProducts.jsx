import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllSavedProducts } from './../reducers/index';
import SavedItemBlock from './savedItemBlock';
import * as actions from './../actions/index';

class SavedProducts extends Component {
    render() {
        const { savedProductsList, deleteSave } = this.props;
        console.log(savedProductsList.length);
        if (savedProductsList.length !== 0) {
            return (
                <div>
                    <h4>Saved products</h4>
                    <table className="table">
                        <tbody>
                            {savedProductsList.map((savedProduct, index) =>
                                <SavedItemBlock key={index} product={savedProduct} deleteSave={deleteSave}></SavedItemBlock>
                            )}
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return (
                <div>

                </div>
            )
        }
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


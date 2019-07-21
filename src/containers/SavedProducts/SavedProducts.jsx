import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllSavedProducts } from '../../_reducers/userInformation';
import * as actions from '../../_actions/index';
import SavedProductBlock from './SavedProductBlock';

class SavedProducts extends Component {
    render() {
        const { savedProductsList, deleteSave } = this.props;
        if (savedProductsList.length !== 0) {
            return (
                <div>
                    <h4>Saved products</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Product Name</th>
                                <th scope="col">Store</th>
                                <th scope="col">Price</th>
                                <th scope="col">Weight</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {savedProductsList.map((savedProduct, index) =>
                                <SavedProductBlock key={index} product={savedProduct} deleteSave={deleteSave}></SavedProductBlock>
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
        savedProductsList: state.userInformation.savedProducts
    }
}

const connectedSavedProducts = withRouter(connect(mapStatesToProps, actions)(SavedProducts));

export {connectedSavedProducts as SavedProducts};


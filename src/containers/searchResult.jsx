import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllProductsList } from './../reducers/index';
import { getErrorMessage } from './../reducers/errorMessage';
import * as actions from './../actions/index';
import SearchBlock from './searchBlock';

class SearchResult extends Component {
    render() {
        const { productsList, errorMessage, saveProduct } = this.props;
        return errorMessage !== null ? errorMessage : (
            <table class="table">
                {productsList.length !== 0 && 
                <thead>
                    <tr>
                        <th scope="col">Store</th>
                        <th scope="col">Price</th>
                        <th scope="col">Location</th>
                        <th scope="col">Save</th>
                    </tr>
                </thead>}
                <tbody>
                    {productsList.map(singleProduct =>
                        <SearchBlock key={singleProduct.id} product={singleProduct} saveProduct={saveProduct}></SearchBlock>
                    )
                    }
                </tbody>
            </table>
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        state: state,
        productsList: getAllProductsList(state),
        errorMessage: getErrorMessage(state)
    }
}


SearchResult = withRouter(connect(mapStatesToProps, actions)(SearchResult));

export default SearchResult;
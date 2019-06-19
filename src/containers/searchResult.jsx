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
            <div>
                {productsList.map(singleProduct =>
                    <div key={singleProduct.id} >
                        <SearchBlock product={singleProduct}></SearchBlock>
                        <button onClick={() => saveProduct(singleProduct)}>save</button>
                    </div>)
                }
            </div>
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
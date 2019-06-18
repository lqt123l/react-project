import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllProductsList } from './../reducers/index';
import {getErrorMessage} from './../reducers/errorMessage';
import SearchBlock from './searchBlock';

class SearchResult extends Component {
    render() {
        const { productsList,errorMessage } = this.props;
        return errorMessage !== null ? errorMessage: (
            <div>
             {productsList.map(singleProduct =>
                <SearchBlock key={singleProduct.id} product={singleProduct}></SearchBlock>)}
            </div>
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        state: state,
        productsList: getAllProductsList(state),
        errorMessage:getErrorMessage(state)
    }
}

SearchResult = withRouter(connect(mapStatesToProps, null)(SearchResult));

export default SearchResult;
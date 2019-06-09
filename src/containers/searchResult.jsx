import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllProductsList } from './../reducers/index';
import SearchBlock from './searchBlock';

class SearchResult extends Component {
    render() {
        const { productsList } = this.props;
        return (
            productsList.map(singleProduct =>
                <SearchBlock key={singleProduct.id} product={singleProduct}></SearchBlock>)
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        state: state,
        productsList: getAllProductsList(state)
    }
}

SearchResult = withRouter(connect(mapStatesToProps, null)(SearchResult));

export default SearchResult;
import React, { Component } from 'react';
import SearchBox from './searchBox';
import ConfirmButton from './confirmButton';
import{fetchProducts, searchInput} from '../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getSearchContents} from '../reducers/searchProducts';


class Search extends Component {
    render() {
        const {state,fetchProducts, searchContent, handleChange} = this.props;
        return (
            <div className='Search'>
                <SearchBox value={searchContent} onHandleChange={handleChange}></SearchBox>
                <ConfirmButton state={state} onSearchClick={fetchProducts}></ConfirmButton>
            </div>
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        state:state,
        searchContent: getSearchContents(state)
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    console.log('Props in dispatch:',ownProps);
    return {
        fetchProducts:() =>dispatch(fetchProducts()),
        handleChange:(e) => dispatch(searchInput(e.target.value))
    }
}

Search = withRouter(connect(mapStatesToProps, mapDispatchToProps)(Search));

export default Search;

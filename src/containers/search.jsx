import React, { Component } from 'react';
import SearchBox from './searchBox';
import ConfirmButton from './confirmButton';
import { fetchProducts, searchInput, setInitialSearchList } from '../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getSearchContents, getIsInputing } from '../reducers/searchProducts';
import { getSearchMemory } from '../reducers/searchMemory';
import SearchHint from './searchHint';



class Search extends Component {

    // componentDidMount(){
    //     const listFromStorage = JSON.parse(window.localStorage.getItem('search_list_history'));
    //     this.props.setInitialSearchList(listFromStorage);
    //     console.log('get_listFromStorage:',listFromStorage)
    // }

    // componentDidUpdate(prePros) {
    //     console.log('set_listToStorage:',prePros.memoryList);
    //     window.localStorage.setItem('search_list_history',JSON.stringify(prePros.memoryList))
    // }


    render() {
        const { state, fetchProducts, searchContent, handleChange, isInputing, memoryList } = this.props;

        return (
            <div className='row'>
                <div className='col-sm-9'>
                    <SearchBox value={searchContent} onHandleChange={handleChange} hintList={'hintList'}></SearchBox>
                    <SearchHint id={'hintList'} isInputing={isInputing} memoryList={memoryList}></SearchHint>
                </div>
                <div className='col-sm-3'>
                    <ConfirmButton state={state} onSearchClick={fetchProducts}></ConfirmButton>
                </div>
            </div>
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        state: state,
        searchContent: getSearchContents(state),
        isInputing: getIsInputing(state),
        memoryList: getSearchMemory(state)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        handleChange: (e) => dispatch(searchInput(e.target.value)),
        // setInitialSearchList:(listFromStorage) => dispatch(setInitialSearchList(listFromStorage))
    }
}

Search = withRouter(connect(mapStatesToProps, mapDispatchToProps)(Search));

export default Search;

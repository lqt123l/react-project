import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import SearchBox from './SearchBox';
import ConfirmButton from './ConfirmButton';
import SearchHint from './SearchHint';
import { fetchProducts, searchInput, setInitialSearchList } from '../../_actions/index';
import { getSearchContents, getIsInputing } from '../../_reducers/searchProducts';
import { getSearchMemory } from '../../_reducers/searchMemory';

class SearchProducts extends Component {

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

const connectedSearchProducts = withRouter(connect(mapStatesToProps, mapDispatchToProps)(SearchProducts));
export {connectedSearchProducts as SearchProducts}


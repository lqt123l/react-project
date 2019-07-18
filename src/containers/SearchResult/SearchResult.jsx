import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllProductsList } from '../../_reducers/index';
import { getErrorMessage } from '../../_reducers/errorMessage';
import * as actions from '../../_actions/index';
import SearchResultBlock from './SearchResultBlock';

class SearchResult extends Component {
    render() {
        const { productsList, errorMessage, saveProduct, loggedIn, showLoginForm } = this.props;
        return errorMessage !== null ? errorMessage : (
            <table className="table">
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
                        <SearchResultBlock
                            key={singleProduct._id}
                            product={singleProduct}
                            loggedIn={loggedIn}
                            saveProduct={saveProduct}
                            showLoginForm={showLoginForm}
                        >
                        </SearchResultBlock>
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
        errorMessage: getErrorMessage(state),
        loggedIn: state.login.loggedIn
    }
}


const connectedSearchResult = withRouter(connect(mapStatesToProps, actions)(SearchResult));

export { connectedSearchResult as SearchResult }
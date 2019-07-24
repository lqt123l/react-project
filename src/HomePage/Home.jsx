import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../_actions/index';
import { SearchProducts } from '../containers/SearchProducts';
import { SearchResult } from '../containers/SearchResult';
import { SavedProducts } from '../containers/SavedProducts';
import { LoginForm } from '../containers/LoginForm';
import { RegisterForm } from '../containers/RegisterForm';

class Home extends Component {

    render() {
        return (
            <div>
                <LoginForm></LoginForm>
                <RegisterForm></RegisterForm>
                <div>Search 'Beef Steak' or 'Pringles Chicken Salt Crips' to try, you can also add your own product by clicking Manage Product tag</div>
                <div className="row">
                    <div className='col-sm-12 col-md-12 col-lg-5'>
                        <SearchProducts></SearchProducts>
                        <SearchResult></SearchResult>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-7'>
                        <SavedProducts></SavedProducts>
                    </div>
                </div>
            </div>
        )
    }
}

const connectedHome = withRouter(connect(null, actions)(Home));

export { connectedHome as Home };

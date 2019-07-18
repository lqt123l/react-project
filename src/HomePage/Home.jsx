import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../_actions/index';
import { SearchProducts } from '../containers/SearchProducts';
import { SearchResult } from '../containers/SearchResult';
import { SavedProducts } from '../containers/SavedProducts';
import { LoginForm } from '../containers/LoginForm';

class Home extends Component {
    render() {
        const {loggedIn,showLoginForm} = this.props;
        return (
            <div>
                <LoginForm></LoginForm>
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

const mapStatesToProps = (state) => {
    return {
        loggedIn:state.login.loggedIn,
        showLoginForm:state.login.showLoginForm
    }
}

const connectedHome = withRouter(connect(mapStatesToProps, actions)(Home));

export {connectedHome as Home};

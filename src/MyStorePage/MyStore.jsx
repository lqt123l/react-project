import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../_actions/index';
import styled from 'styled-components';
import { StoreRegForm } from '../containers/StoreRegisterForm';
import AddProductForm from './../containers/forms/addProductForm';
import {UserAddProductForm} from '../containers/UserAddProductForm';


class MyStore extends Component {

    // componentDidMount() {
    //     const { hasStore, disableStoreRegForm, showStoreRegForm } = this.props
    //     hasStore ? disableStoreRegForm() : showStoreRegForm()
    // }
    componentDidMount() {

        const { getStoreInfo, loggedIn, showLoginForm } = this.props;
        console.log('LoggedIn:', loggedIn)
        if (loggedIn === false) {
            showLoginForm();
        } else {
            getStoreInfo()
        }
    }

    render() {
        const { hasStore, showStoreRegForm, loggedIn, showLoginForm, showRegisterForm } = this.props;
        if (hasStore === false && loggedIn) {
            return (
                <div>
                    <h2>Please Register a store</h2>
                    <button onClick={() => showStoreRegForm()}>Register store</button>
                    <div className='row'>
                        <StoreRegForm></StoreRegForm>
                    </div>
                </div>
            );
        }
        else if (hasStore && loggedIn) {
            return (
                <div>
                    <UserAddProductForm></UserAddProductForm>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h2>Please Login First</h2>
                    <button onClick={() => showLoginForm()}>Login</button>
                    <button onClick={() => showRegisterForm()}>Register</button>
                    <StoreRegForm></StoreRegForm>
                </div>
            )
        }
    }
}

const mapStatesToProps = (state) => {
    return {
        hasStore: state.userInformation.hasOwnProperty('userStore') ? true : false,
        loggedIn: state.login.loginStatus.loggedIn
    }
}

const connectedMyStore = withRouter(connect(mapStatesToProps, actions)(MyStore));

export { connectedMyStore as MyStore };

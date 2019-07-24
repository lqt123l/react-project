import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../_actions/index';
import styled from 'styled-components';
import { StoreRegForm } from '../containers/StoreRegisterForm';

class MyStore extends Component {

    // componentDidMount() {
    //     const { hasStore, disableStoreRegForm, showStoreRegForm } = this.props
    //     hasStore ? disableStoreRegForm() : showStoreRegForm()
    // }
    componentDidMount(){
        const {getStoreInfo} = this.props;
        getStoreInfo()
    }

    render() {
        const{hasStore,showStoreRegForm} = this.props;
        if(hasStore === false){
            return (
                <div>
                    <h2>Please Register a store first</h2>
                    <button onClick={()=>showStoreRegForm()}>Register store</button>
                    <div className='row'>
                        <StoreRegForm></StoreRegForm>
                    </div>
                </div>
            );}
        else{
            return(
                <div>AAAAAAA</div>
            )
        }
    }
}

const mapStatesToProps = (state) => {
    return {
        hasStore: state.userInformation.hasOwnProperty('userStore') ? true : false
    }
}

const connectedMyStore = withRouter(connect(mapStatesToProps, actions)(MyStore));

export { connectedMyStore as MyStore };

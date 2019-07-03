import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getStores} from '../reducers/stores'
import { fetchStores } from './../actions/index';


class StoreManage extends Component {

    componentDidMount(){
        console.log('AAAAAAAA');
        const {fetchStores} = this.props; 
        fetchStores();
    }

    render() {
       const {stores} = this.props;
       console.log(stores);

        return (
            <div className='row'>
            </div>
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        state: state,
        stores: getStores(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStores: () => dispatch(fetchStores())
    }
}

StoreManage = withRouter(connect(mapStatesToProps, mapDispatchToProps)(StoreManage));

export default StoreManage;

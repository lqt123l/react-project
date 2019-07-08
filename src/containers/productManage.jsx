import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getStores } from '../reducers/stores'
import { fetchStores } from './../actions/index';
import AddProductForm from './forms/addProductForm';

class ProductManage extends Component {

    componentDidMount() {
        const { fetchStores } = this.props;
        fetchStores();
    }

    render() {
        const { stores } = this.props;
        console.log(stores);

        return (
            <div>
                <h2>Add Product</h2>
                <div className='row'>
                    <AddProductForm></AddProductForm>
                </div>
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

ProductManage = withRouter(connect(mapStatesToProps, mapDispatchToProps)(ProductManage));

export default ProductManage;

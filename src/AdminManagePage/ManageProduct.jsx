import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchStores } from './../_actions/index';
import AddProductForm from './../containers/forms/addProductForm';

class ProductManage extends Component {

    componentDidMount() {
        const { fetchStores } = this.props;
        fetchStores();
    }

    render() {

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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStores: () => dispatch(fetchStores())
    }
}

const connectedProductManage = withRouter(connect(null, mapDispatchToProps)(ProductManage));

export {connectedProductManage as ProductManage};

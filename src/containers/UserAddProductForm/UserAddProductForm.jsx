import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../_actions/index';
import styled from 'styled-components';


class UserAddProductForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {
                productName: '',
                prodcutBrand: '',
                productStore: props.storeName,
                regularPrice: '',
                discountPrice: '',
                weight: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { product } = this.state;
        this.setState({
            product: {
                ...product,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        const { product } = this.state;
        console.log(product);
        const { userSendProduct } = this.props;
        if (product.productName && product.discountPrice) {
            userSendProduct(product);
        }
    }

    render() {
        const { storeName } = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Store</label>
                    <div className="col-sm-10">
                        <input type="text" readOnly className="form-control-plaintext" name="productStore" value={storeName}></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Product Name</label>
                    <div className="col-sm-10">
                        <input name="productName" className="form-control" placeholder="Product Name" onChange={this.handleChange}></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Product Brand</label>
                    <div className="col-sm-10">
                        <input name="productBrand" className="form-control" placeholder="Product Brand" onChange={this.handleChange}></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Regular Price</label>
                    <div className="col-sm-10">
                        <input name="regularPrice" className="form-control" placeholder="Regular Price" onChange={this.handleChange}></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Discount Price</label>
                    <div className="col-sm-10">
                        <input name="discountPrice" className="form-control" placeholder="Discount Price" onChange={this.handleChange}></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Weight</label>
                    <div className="col-sm-10">
                        <input name="weight" className="form-control" placeholder="Weight" onChange={this.handleChange}></input>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        storeName: state.userStore.userStoreInfo.name
    }
}


const connectedUserAddProductForm = withRouter(connect(mapStateToProps, actions)(UserAddProductForm));

export { connectedUserAddProductForm as UserAddProductForm }
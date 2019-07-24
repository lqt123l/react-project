import React from 'react';
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form';
import {sendProduct} from '../../_actions/index';
import { renderInput, renderSelect } from './shape';


const validate = values => {
    const errors = {};
    const nameRegex = /.{2,50}/;
    const priceRegex = /^\d+\.\d{1,2}|\d{0,5}$/;
    const weightRegex = /^\d+\.\d{1,2}|\d{0,6}$/;


    if (!values.productName) {
        errors.productName = 'Required';
    } else if (nameRegex.test(values.productName) === false) {
        errors.productName = 'Please input an valid product name.'
    }

    if (!values.productBrand) {
        errors.productBrand = 'Required';
    } else if (nameRegex.test(values.productBrand) === false) {
        errors.productBrand = 'Please input an valid product brand.'
    }

    if (!values.regularPrice) {
        errors.regularPrice = 'Required';
    } else if (priceRegex.test(values.regularPrice) === false) {
        errors.regularPrice = 'Please input an valid regular price.'
    }

    if (!values.discountPrice) {
        errors.discountPrice = 'Required';
    } else if (priceRegex.test(values.discountPrice) === false) {
        errors.discountPrice = 'Please input an valid discountPrice.'      
    } 

    function correct(value){
        if(value>=0 && value<=10){
            return value/10
        }
        return value
    }
    const newDiscount = correct(values.discountPrice);
    const newRegular = correct(values.regularPrice);
    
    if (newDiscount > newRegular) {
        errors.discountPrice = 'Discount price must less or equal than reguar price'
    }


    if (!values.weight) {
        errors.weight = 'Required';
    } else if (weightRegex.test(values.weight) === false) {
        errors.weight = 'Please input an valid weight.'
    }


    return errors
}


let AddProductForm = ({ handleSubmit, submitting, stores }) => {
    return (
        <div>
            <form onSubmit={handleSubmit(sendProduct)}>
                <Field label='Product Name' name='productName' component={renderInput}></Field>
                <Field label='Product Brand' name='productBrand' component={renderInput}></Field>
                <Field label='Product Store' name='productStore' component={renderSelect}>
                    {stores.map(store => <option key={store._id} value={store._id}>{store.name}</option>)}
                </Field>
                <Field label='Regular Price' name='regularPrice' component={renderInput}></Field>
                <Field label='Discount Price' name='discountPrice' component={renderInput}></Field>
                <Field label='Weight' name='weight' component={renderInput}></Field>
                <button type="submit" disabled={submitting}>Submit</button>
            </form>
        </div>);
}

AddProductForm = reduxForm({
    form: 'addProduct',
    destroyOnUnmount: false,
    validate
})(AddProductForm)

AddProductForm = connect(
    state => ({
        stores: state.userStore.userStoresList
    }),
    null
)(AddProductForm)
export default AddProductForm;
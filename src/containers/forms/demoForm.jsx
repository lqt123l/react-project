import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { testSend } from '../_actions/index';
import Isemail from 'isemail';
import {renderInput, renderSelect} from './forms/shape';

const lists = ['A', 'B', 'C', 'D']

const validate = values => {
    const errors = {};
    const nameRegex = /^\w{2,30}$/;

    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (nameRegex.test(values.firstName) === false) {
        errors.firstName = 'Please input an valid first name.'
    }
    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (nameRegex.test(values.lastName) === false) {
        errors.lastName = 'Please input an valid last name.'
    }
    if (!values.email) {
        errors.email = 'Required';
    }
    else if (Isemail.validate(values.email) === false) {
        errors.email = 'Please input an valid email address'
    }

    return errors
}

// const createRenderer = render => ({ input, meta, label, ...rest }) =>
//     <div>
//         <label>{label}</label>
//         {render(input, label, rest)}
//         {meta.error && meta.touched && <span>{meta.error}</span>}
//     </div>

// const renderInput = createRenderer((input, label) =>
//     <input {...input} placeholder={label}></input>
// )
// const renderSelect = createRenderer((input, label, { children }) =>
//     <select {...input} placeholder={label}>{children}</select>)

let DemoForm = ({ handleSubmit, submitting }) => {
    return (
        <div>
            <form onSubmit={handleSubmit(testSend)}>
                <Field label='First Name' name='firstName' component={renderInput}></Field>
                <Field label='Last Name' name='lastName' component={renderInput}></Field>
                <Field label='email' name='email' component={renderInput}></Field>
                <Field label='province' name='province' component={renderSelect}>
                    {lists.map(list => <option key={list} value={list}>{list}</option>)}
                </Field>
                <button type="submit" disabled={submitting}>Submit</button>
            </form>
        </div>);
}

DemoForm = reduxForm({
    form: 'demo',
    destroyOnUnmount: false,
    validate
})(DemoForm)
export default DemoForm;

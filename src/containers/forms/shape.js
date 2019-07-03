import React from 'react';

const createRenderer = render => ({ input, meta, label, ...rest }) =>
    <div>
        <label>{label}</label>
        {render(input, label, rest)}
        {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>

export const renderInput = createRenderer((input, label) =>
    <input {...input} placeholder={label}></input>
)
export const renderSelect = createRenderer((input, label, { children }) =>
    <select {...input} placeholder={label}>{children}</select>)

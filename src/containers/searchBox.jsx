import React from 'react';
const SearchBox = ({name,onHandleChange}) => {
    return (
        <input type="text" value={name} onChange={onHandleChange}>
        </input>
    );
}

export default SearchBox;
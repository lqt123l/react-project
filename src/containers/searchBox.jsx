import React from 'react';
const SearchBox = ({name,onHandleChange,hintList}) => {
    return (
        <input type="text" value={name} onChange={onHandleChange} list={hintList}>
        </input>
    );
}

export default SearchBox;
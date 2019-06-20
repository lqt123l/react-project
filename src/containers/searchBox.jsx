import React from 'react';
// import styled from'styled-components';

// const Styles = styled.div`

//     #searchInput{

//     }

// `;
const SearchBox = ({name,onHandleChange,hintList}) => {
    return (
        <input className='form-control'  type="text" value={name} onChange={onHandleChange} list={hintList}>
        </input>
    );
}

export default SearchBox;
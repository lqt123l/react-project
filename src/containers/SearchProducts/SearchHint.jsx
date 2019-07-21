import React from 'react';
const SearchHint = ({ id, isInputing,memoryList }) => {
    return (
        <datalist id={id}>
            {isInputing && (
                <div>
                    <option value="Pringles Chicken Salt Crips"></option>
                    <option value="Beef steak"></option>
                </div>
            )}
            {isInputing || (
                <div>  
                    {memoryList.map((list,index)=><option key={index} value={list}></option>)}
                </div>
            )}
        </datalist>
    );
}

export default SearchHint;
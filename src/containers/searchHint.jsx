import React from 'react';
const SearchHint = ({ id, isInputing,memoryList }) => {
    return (
        <datalist id={id}>
            {isInputing && (
                <div>
                    <option value="Swisses Gape Seed"></option>
                    <option value="Bio Island DHA Kids 60 Capsules"></option>
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
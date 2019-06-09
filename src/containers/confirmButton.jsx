import React from 'react';
const ConfirmButton = ({onSearchClick}) => {
    return (  
        <div>
            <button onClick = {onSearchClick} >Search</button>
        </div>
    );
}

export default ConfirmButton;
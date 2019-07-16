import React from 'react';
const ConfirmButton = ({onSearchClick}) => {
    return (  
        <div>
            <button  className="btn btn-outline-secondary" type="button" onClick = {onSearchClick} >Search</button>
        </div>
    );
}

export default ConfirmButton;
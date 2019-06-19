import React from 'react';
const SavedItemBlock = ({ product }) => {
    return (
        <div>
            <span>{product.productName}</span>&nbsp;&nbsp;
            <span>{product.productStore}</span>&nbsp;&nbsp;
            <span>$AU{product.discountPrice}</span>&nbsp;&nbsp;&nbsp;
            <span>{product.productLocation}</span>
        </div>
    );
}

export default SavedItemBlock;
import React from 'react';
const SearchBlock = ({product}) => {
    return (
        <div>
            <p>
               <span>{product.productStore}</span>&nbsp;&nbsp;
               <span>$AU{product.discountPrice}</span>&nbsp;&nbsp;&nbsp;
               <span>{product.productLocation}</span>
            </p>
        </div>
    );
}

export default SearchBlock;
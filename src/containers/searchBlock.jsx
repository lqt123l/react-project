import React from 'react';
const SearchBlock = ({ product,saveProduct }) => {
    return (
        <tr>
            <td>{product.productStore}</td>
            <td>$AU{product.discountPrice}</td>
            <td>{product.productLocation}</td>
            <td><button className="btn btn-primary" onClick={() => saveProduct(product)}>save</button></td>
        </tr>
    );
}

export default SearchBlock;
import React from 'react';
const SearchResultBlock = ({ product,saveProduct }) => {
    return (
        <tr>
            <td>{product.productStore.name}</td>
            <td>$AU{product.discountPrice}</td>
            <td>{product.productStore.location}</td>
            <td><button className="btn btn-primary" onClick={() => saveProduct(product)}>save</button></td>
        </tr>
    );
}

export default SearchResultBlock;
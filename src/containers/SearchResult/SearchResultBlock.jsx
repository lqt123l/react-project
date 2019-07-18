import React from 'react';
const SearchResultBlock = ({ product, loggedIn, saveProduct, showLoginForm}) => {
    return (
        <tr>
            <td>{product.productStore.name}</td>
            <td>$AU{product.discountPrice}</td>
            <td>{product.productStore.location}</td>
            <td><button className="btn btn-primary" onClick={() => loggedIn? saveProduct(product):showLoginForm()}>save</button></td>
        </tr>
    );
}

export default SearchResultBlock;


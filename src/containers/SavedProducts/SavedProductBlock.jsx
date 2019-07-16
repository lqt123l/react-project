import React from 'react';
const SavedProductBlock = ({ product,deleteSave }) => {
    return (
        <tr>
            <td>{product.productName}</td>
            <td>{product.productStore.name}</td>
            <td>$AU{product.discountPrice}</td>
            <td>{product.weight}g</td>
            <td><button className="btn btn-outline-warning" onClick={() => deleteSave(product._id)}>Delete/Finish</button></td>
        </tr>
    );
}

export default SavedProductBlock;
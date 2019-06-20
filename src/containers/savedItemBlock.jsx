import React from 'react';
const SavedItemBlock = ({ product,deleteSave }) => {
    return (
        <tr>
            <td>{product.productName}</td>
            <td>{product.productStore}</td>
            <td>$AU{product.discountPrice}</td>
            <td>{product.weight} g</td>
            <button className="btn btn-outline-warning" onClick={() => deleteSave(product.id)}>Delete/Finish</button>
        </tr>
    );
}

export default SavedItemBlock;
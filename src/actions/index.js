import * as api from './../api/index';
import Axios from 'axios';


export const fetchProducts = (filter) => (dispatch, getState) => {

    dispatch({
        type: 'FETCH_PRODUCTS_REQUEST',
        filter
    });

    dispatch({
        type: 'ADD_SEARCH_MEMORY',
        item: getState().searchProducts
    })

    Axios.get('http://localhost:5001/product')
        .then((result) => {
            console.log(result);
        })


    return api.fetchProducts(getState().searchProducts)
        .then(
            response => {
                dispatch({
                    type: 'RECEIVE_PRODUCTS',
                    filter,
                    response
                })
            },
            error => {
                dispatch({
                    type: 'RECEIVE_PRODUCTS_FALURE',
                    message: error.message || 'Cannot find relenvant product'
                })
            }
        )
}

// export const setInitialSearchList = (listFromStorage) => ({
//         type:'STORAGE_LIST',
//         content:listFromStorage
// })

export const searchInput = (content) => ({
    type: 'SEARCH_INPUT',
    content
})

export const saveProduct = (product) => ({
    type: 'SAVE_PRODUCT',
    product
})

export const deleteSave = (id) => ({
    type: 'DELETE_SAVE',
    id
})

export const testSend = (value) => {
    console.log('Value:', value)
}

export const fetchStores = () => (dispatch, getState) => {
    return Axios.get('http://localhost:5001/store')
        .then(
            response => {
                console.log(response.data);
                dispatch({
                    type: 'FETCH_STORES_SUCCESS',
                    payload: response.data
                })
            }
        )
}

// export const sendProduct = (value) => (dispatch, getState) => {
//     console.log('AAAAAAAAAAAAA');
//     return Axios.post('http://localhost:5001/store', {
//         productName: value.productName,
//         productBrand: value.productBrand,
//         productStore: value.storeId,
//         regularPrice: value.regularPrice,
//         discountPrice: value.discountPrice,
//         weight: value.weight
//     })
//         .then(
//             response => {
//                 dispatch({
//                     type: 'ADD_PRODUCT_TO_SERVER_SUCCESS',
//                     response
//                 })
//             },
//             error => {
//                 dispatch({
//                     type: 'ADD_PRODUCT_TO_SERVER_FALURE',
//                     message: error.message || 'Cannot find relenvant product'
//                 })
//             }
//         )
// }


export const sendProduct = (value) => {
    console.log(value);
    Axios.post('http://localhost:5001/product', {
        productName: value.productName,
        productBrand: value.productBrand,
        storeId: value.productStore,
        regularPrice: value.regularPrice,
        discountPrice: value.discountPrice,
        weight: value.weight
    })
}


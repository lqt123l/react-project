import * as api from './../api/index';


export const fetchProducts = (filter) => (dispatch,getState) => {

    
    dispatch({
        type: 'FETCH_PRODUCTS_REQUEST',
        filter
    });

    dispatch({
        type:'ADD_SEARCH_MEMORY',
        item:getState().searchProducts
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
                    type:'RECEIVE_PRODUCTS_FALURE',
                    message:error.message || 'Cannot find relenvant product'
                })
            }
        )
}

// export const setInitialSearchList = (listFromStorage) => ({
//         type:'STORAGE_LIST',
//         content:listFromStorage
// })

export const searchInput = (content) => ({
    type:'SEARCH_INPUT',
    content:content
})


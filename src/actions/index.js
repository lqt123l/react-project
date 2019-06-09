import * as api from './../api/index';


export const fetchProducts = (filter) => (dispatch,getState) => {
    dispatch({
        type: 'FETCH_PRODUCTS_REQUEST',
        filter
    });
    return api.fetchProducts(getState().searchProducts)
        .then(
            response => {
                dispatch({
                    type: 'RECEIVE_PRODUCTS',
                    filter,
                    response
                })
            }
        )
}

export const searchInput = (content) =>({
    type:'SEARCH_INPUT',
    content:content
})

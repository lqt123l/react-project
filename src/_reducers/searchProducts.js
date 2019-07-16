const searchProducts = (state = {}, action) => {
    switch (action.type) {
        case 'SEARCH_INPUT':
            return action.content
        default:
            return state;
    }
}

export default searchProducts;

export const getSearchContents = (state) => state.searchProducts;
export const getIsInputing = (state) => state.searchProducts[0] ? true : false;
const receiveProductsIdList = (state=[],action) => {
    switch (action.type){
        case 'RECEIVE_PRODUCTS':
            return action.response.map(product=>product.id)
        default:
            return state;
    }
}

export default receiveProductsIdList;

export const getAllIds = (state) => state.receiveProductsIdList;
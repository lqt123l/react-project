const receiveProducts = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_PRODUCTS':
            const nextState = { ...state };
            action.response.forEach(product => {
                nextState[product.id] = product;
            });
            return nextState;

        default:
            return state;
    }
}

export const getProducts = (state,id) => state.receiveProducts[id];

export default receiveProducts;
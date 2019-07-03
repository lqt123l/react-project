const stores = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_STORES_SUCCESS':
            return action.payload
        default:
            return state;

    }
}

export default stores;
export const getStores = (state) => state.stores

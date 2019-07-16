const stores = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_STORES_SUCCESS':
            const newState = [...action.payload]
            return newState
        default:
            return state;

    }
}

export default stores;
export const getStores = (state) => state.stores

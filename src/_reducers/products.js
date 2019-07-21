import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_PRODUCTS':
            const nextState = { ...state };
            action.payload.map(product => {
                nextState[product._id] = product;
            });
            return nextState;

        default:
            return state;
    }
}

const allIds = (state=[],action) => {
    switch (action.type){
        case 'RECEIVE_PRODUCTS':
            return action.payload.map(product=>product._id)
        default:
            return state;
    }
}

export const products = combineReducers({byId,allIds})

export const getProducts = (state,id) => state.products.byId[id];
export const getAllIds = (state) => state.products.allIds;
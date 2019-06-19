import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
    switch (action.type) {
        case 'SAVE_PRODUCT':
            const nextState = { ...state };
            nextState[action.product.id] = action.product;     
            return nextState;

        default:
            return state;
    }
}

const allIds = (state=[],action) => {
    switch (action.type){
        case 'SAVE_PRODUCT':
            return [...state,action.product.id]
        default:
            return state;
    }
}

export const savedProducts = combineReducers({byId,allIds})

export const getSavedProducts = (state,id) => state.savedProducts.byId[id];
export const getAllSavedIds = (state) => state.savedProducts.allIds;
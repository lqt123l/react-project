import { combineReducers } from 'redux';
import _ from 'lodash';

const byId = (state = {}, action) => {
    switch (action.type) {
        case 'SAVE_PRODUCT':
            const nextState = { ...state };
            nextState[action.product.id] = action.product;     
            return nextState;       
        case 'DELETE_SAVE':
            return _.omit(state,action.id);

        default:
            return state;
    }
}

const allIds = (state=[],action) => {
    switch (action.type){
        case 'SAVE_PRODUCT':
            return [...state,action.product.id]
        case 'DELETE_SAVE':
            const newArray = [];
            state.forEach(function(single){
                if (single !== action.id){
                    newArray.push(single)
                }
            })
            return newArray;

        default:
            return state;
    }
}

export const savedProducts = combineReducers({byId,allIds})

export const getSavedProducts = (state,id) => state.savedProducts.byId[id];
export const getAllSavedIds = (state) => state.savedProducts.allIds;
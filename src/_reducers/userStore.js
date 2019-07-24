import { combineReducers } from 'redux';

const userStoresList = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_STORES_SUCCESS':
            const newState = [...action.payload]
            return newState
        default:
            return state;

    }
}

const initialRegForm = {showStoreRegForm:false};
const storeRegForm = (state=initialRegForm, action) => {
    switch (action.type) {
        case 'SHOW_STORE_REG_FORM':
            return {
                showStoreRegForm: true
            };
        case 'DISABLE_STORE_REG_FORM':
            return {
                showStoreRegForm: false
            };
        default:
            return state
    }
}

const storeRegStatus = (state={}, action) => {
    switch (action.type) {
        case 'REGISTER_REQUEST':
          return { registering: true };
        case 'REGISTER_SUCCESS':
          return {};
        case 'REGISTER_FAIL':
          return {error:action.payload};
        default:
          return state
      }
}

const storeReg = combineReducers({storeRegForm, storeRegStatus})
const userStore = combineReducers({ userStoresList, storeReg })
export default userStore;
export const getUserStoreList = (state) => state.userStore.userStoresList




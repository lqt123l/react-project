import {combineReducers} from 'redux';
import searchProducts from './searchProducts';
import searchMemory from './searchMemory';
import errorMessage from './errorMessage';
import stores from './stores';
import {products, getAllIds, getProducts} from './products';
import { savedProducts,getAllSavedIds,getSavedProducts } from './savedProducts';
import {reducer as formReducer} from 'redux-form';
import { registration } from './register';
import {login} from './login';
import { loginForm } from './loginForm';


const store = combineReducers({
    products, 
    stores,
    savedProducts,
    searchProducts, 
    searchMemory,
    errorMessage,
    form:formReducer,
    registration,
    login,
    loginForm
});

export default store;

export const getAllProductsList = (state) => {
    const ids = getAllIds(state);
    return ids.map(id =>  getProducts(state,id) )
}

export const getAllSavedProducts = (state) => {
    const ids = getAllSavedIds(state);
    return ids.map(id =>  getSavedProducts(state,id) )
}


    
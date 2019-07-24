import {combineReducers} from 'redux';
import searchProducts from './searchProducts';
import searchMemory from './searchMemory';
import errorMessage from './errorMessage';
import userStore from './userStore';
import {products, getAllIds, getProducts} from './products';
import {reducer as formReducer} from 'redux-form';
import { registrationStatus } from './registrationStatus';
import { registerForm } from './registerForm';
import {loginStatus} from './loginStatus';
import { loginForm } from './loginForm';
import {userInformation} from './userInformation'


const login = combineReducers({loginStatus, loginForm})
const registration = combineReducers({registrationStatus, registerForm})


const store = combineReducers({
    products, 
    userStore,
    searchProducts, 
    searchMemory,
    errorMessage,
    form:formReducer,
    registration,
    login,
    userInformation
});

export default store;

export const getAllProductsList = (state) => {
    const ids = getAllIds(state);
    return ids.map(id =>  getProducts(state,id) )
}



    
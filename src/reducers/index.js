import {combineReducers} from 'redux';
import searchProducts from './searchProducts';
import searchMemory from './searchMemory';
import errorMessage from './errorMessage';
import {products, getAllIds, getProducts} from './products';
import { savedProducts } from './savedProducts';




const store = combineReducers({products, savedProducts,searchProducts, searchMemory,errorMessage});

export default store;

export const getAllProductsList = (state) => {
    const ids = getAllIds(state);
    return ids.map(id =>  getProducts(state,id) )
}
    
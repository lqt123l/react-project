import {combineReducers} from 'redux';
import searchProducts from './searchProducts';
import searchMemory from './searchMemory';
import errorMessage from './errorMessage';
// import products from './products';
import {products, getAllIds, getProducts} from './products';




const store = combineReducers({products, searchProducts, searchMemory,errorMessage});

export default store;

export const getAllProductsList = (state) => {
    const ids = getAllIds(state);
    return ids.map(id =>  getProducts(state,id) )
}
    
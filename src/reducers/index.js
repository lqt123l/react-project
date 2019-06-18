import {combineReducers} from 'redux';
import receiveProducts from './receiveProducts';
import searchProducts from './searchProducts';
import receiveProductsIdList from './receiveProductsIdList';
import searchMemory from './searchMemory';
import errorMessage from './errorMessage';
import {getAllIds} from './receiveProductsIdList'
import {getProducts} from './receiveProducts';




const products = combineReducers({receiveProducts, searchProducts, receiveProductsIdList,searchMemory,errorMessage});

export default products;

export const getAllProductsList = (state) => {
    const ids = getAllIds(state);
    return ids.map(id =>  getProducts(state,id) )
}
    
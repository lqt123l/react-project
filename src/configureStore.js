import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import products from './reducers/index';


const configureStore = () => {

    // const middlewares = [thunk];

    // middlewares.push(createLogger());

    return createStore(
        products,
        applyMiddleware(thunk, createLogger())
    );
}

export default configureStore;
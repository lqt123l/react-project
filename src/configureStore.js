import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import store from './reducers/index';


const configureStore = () => {

    // const middlewares = [thunk];

    // middlewares.push(createLogger());

    return createStore(
        store,
        applyMiddleware(thunk, createLogger())
    );
}

export default configureStore;
//Add middleware to the store: so when action get fired (displayed), we can catch them & display them 
//middleware: between Action & Root Reducer
import { createStore, applyMiddleware } from 'redux';
//logger: a mdiddleware
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger]; //put 'logger' middleware to 'middlewares' array

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;
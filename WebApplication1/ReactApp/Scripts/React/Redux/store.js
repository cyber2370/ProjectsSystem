import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import middleware from './middlewares/promises-middleware.js';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';  

console.log(middleware);
let createStoreWithMiddleware = applyMiddleware(middleware)(createStore);

const enhansers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStoreWithMiddleware(rootReducer, enhansers);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
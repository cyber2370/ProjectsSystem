import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';  

const enhansers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, enhansers);
export const history = syncHistoryWithStore(hashHistory, store);

export default store;
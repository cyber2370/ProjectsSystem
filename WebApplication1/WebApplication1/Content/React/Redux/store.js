import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';  

const projects = [{
	id: 1,
	projectName: "PrName1",
	owner: "Owner1"
},{
	id: 2,
	projectName: "PrName2",
	owner: "Owner2"
},{
	id: 3,
	projectName: "PrName3",
	owner: "Owner3"
}];

const defaultState = {
	projects
};

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
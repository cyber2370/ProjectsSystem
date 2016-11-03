import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';  

const projects = [{
	id: 1,
	name: "PrName1",
	owner: "Owner1"
},{
	id: 2,
	name: "PrName2",
	owner: "Owner2"
},{
	id: 3,
	name: "PrName3",
	owner: "Owner3"
}];

const tasks = [{
	id: 1,
	name: "TaskName1",
	description: "Description1"
},{
	id: 2,
	name: "TaskName2",
	description: "Description2"
},{
	id: 3,
	name: "TaskName3",
	description: "Description3"
}];

const subtasks = [{
	id: 1,
	name: "SubtaskName1",
	description: "Description1",
	duration: "14:00"
},{
	id: 2,
	name: "SubtaskName2",
	description: "Description2",
	duration: "4:00"
},{
	id: 3,
	name: "SubtaskName3",
	description: "Description3",
	duration: "22:00"
}];

const defaultState = {
	projects,
	tasks, 
	subtasks
};

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(hashHistory, store);

export default store;
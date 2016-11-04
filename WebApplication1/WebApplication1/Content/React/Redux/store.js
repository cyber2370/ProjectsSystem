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
	name: "Task1 of " + projects[0].name,
	description: "Description1",
	project : projects[0]
},{
	id: 2,
	name: "Task2 of " + projects[0].name,
	description: "Description1",
	project : projects[0]
},{
	id: 3,
	name: "Task3 of " + projects[0].name,
	description: "Description1",
	project : projects[0]
},{
	id: 4,
	name: "Task1 of " + projects[1].name,
	description: "Description1",
	project : projects[1]
},{
	id: 5,
	name: "Task2 of " + projects[1].name,
	description: "Description1",
	project : projects[1]
},{
	id: 6,
	name: "Task3 of " + projects[1].name,
	description: "Description1",
	project : projects[1]
},{
	id: 7,
	name: "Task1 of " + projects[2].name,
	description: "Description1",
	project : projects[2]
},{
	id: 8,
	name: "Task2 of " + projects[2].name,
	description: "Description1",
	project : projects[2]
},{
	id: 9,
	name: "Task3 of " + projects[2].name,
	description: "Description1",
	project : projects[2]
}];

const subtasks = [{
	id: 1,
	name: "Subtask1 of " + tasks[0].name,
	description: "Description1",
	duration: "14:00",
	task: tasks[0]
},{
	id: 2,
	name: "Subtask2 of " + tasks[0].name,
	description: "Description1",
	duration: "14:00",
	task: tasks[0]
},{
	id: 3,
	name: "Subtask3 of " + tasks[0].name,
	description: "Description1",
	duration: "14:00",
	task: tasks[0]
},{
	id: 4,
	name: "Subtask1 of " + tasks[1].name,
	description: "Description1",
	duration: "14:00",
	task: tasks[1]
},{
	id: 5,
	name: "Subtask2 of " + tasks[1].name,
	description: "Description1",
	duration: "14:00",
	task: tasks[1]
},{
	id: 6,
	name: "Subtask3 of " + tasks[1].name,
	description: "Description1",
	duration: "14:00",
	task: tasks[1]
},{
	id: 7,
	name: "Subtask1 of " + tasks[2].name,
	description: "Description1",
	duration: "14:00",
	task: tasks[2]
},{
	id: 8,
	name: "Subtask2 of " + tasks[2].name,
	description: "Description1",
	duration: "14:00",
	task: tasks[2]
},{
	id: 9,
	name: "Subtask3 of " + tasks[2].name,
	description: "Description1",
	duration: "14:00",
	task: tasks[2]
},{
	id: 10,
	name: "Subtask1 of " + tasks[3].name,
	description: "Description1",
	duration: "14:00",
	task: tasks[3]
},{
	id: 11,
	name: "Subtask2 of " + tasks[4].name,
	description: "Description1",
	duration: "14:00",
	task: tasks[4]
},{
	id: 12,
	name: "Subtask3 of " + tasks[5].name,
	description: "Description1",
	duration: "14:00",
	task: tasks[5]
},{
	id: 13,
	name: "Subtask1 of " + tasks[6].name,
	description: "Description1",
	duration: "14:00",
	task: tasks[6]
},{
	id: 14,
	name: "Subtask2 of " + tasks[7].name,
	description: "Description1",
	duration: "14:00",
	task: tasks[7]
},{
	id: 15,
	name: "Subtask3 of " + tasks[8].name,
	description: "Description1",
	duration: "14:00",
	task: tasks[8]
}];

const defaultState = {
	projects,
	tasks, 
	subtasks
};

const enhansers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhansers);
export const history = syncHistoryWithStore(hashHistory, store);

export default store;
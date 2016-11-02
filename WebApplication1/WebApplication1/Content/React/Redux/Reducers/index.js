import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import projects from './projects';
import tasks from './tasks';
import subtasks from './subtasks';

const rootReducer = combineReducers({
	projects,
	tasks,
	subtasks,
	routing: routerReducer
});

export default rootReducer;
import * as projectsActionCreators from './projectsActionCreators'; 
import * as tasksActionCreators from './tasksActionCreators'; 
import * as subtasksActionCreators from './subtasksActionCreators'; 

export default Object.assign({}, projectsActionCreators, tasksActionCreators, subtasksActionCreators);
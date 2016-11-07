function tasks(state = [], action) {
	switch (action.type) {
		case 'ADD_TASK':
			action.task.project = {};
			action.task.project.id = action.projectId;
			
			return [
				...state,
				action.task
			];
		case 'UPDATE_TASK':
			var tasks = state.slice();
			
			var indexToUpdate = tasks.findIndex(element => element.id == action.task.id);

			tasks[indexToUpdate].name = action.task.name;
			tasks[indexToUpdate].description = action.task.description;

			return tasks;
		case 'REMOVE_TASK':
			var tasks = state.slice();
			
			var indexToRemove = tasks.findIndex(element => element.id == action.id);
    		tasks.splice(indexToRemove, 1);

			return tasks;
		default:
			return state;
	}
}

export default tasks;

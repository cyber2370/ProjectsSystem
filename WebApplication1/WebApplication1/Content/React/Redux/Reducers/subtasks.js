function subtasks(state = [], action) {
	switch (action.type) {
		case 'ADD_SUBTASK':
			return [
				...state,
				action.subtask
			];
		case 'UPDATE_SUBTASK':
			var subtasks = state.slice();
			
			var indexToUpdate = subtasks.findIndex((element) => element.id == action.subtask.id);

			subtasks[indexToUpdate].name = action.subtask.name;
			subtasks[indexToUpdate].description = action.subtask.description;
			subtasks[indexToUpdate].duration = action.subtask.duration;

			return subtasks;
		case 'REMOVE_SUBTASK':
			var subtasks = state.slice();
			
			var indexToRemove = subtasks.findIndex((element) => element.id == action.id);
    		subtasks.splice(indexToRemove, 1);

			return subtasks;
		default:
			return state;
	}
}

export default subtasks;

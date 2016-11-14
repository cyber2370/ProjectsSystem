function subtasks(state = [], action) {
	switch (action.type) {
		case 'SUBTASKS_LOADED': {
			return action.data;
		}

		case 'SUBTASK_LOADED': {
			let subtask = action.subtask;

			subtask.task = {
				id: action.taskId 
			};

			return [
				...state,
				subtask
			];
		}


		case 'SUBTASK_UPLOADED': {
			return [
				...state,
				action.data
			];
		}

		case 'SUBTASK_UPDATED': {
			let subtasks = state.slice();
			let subtask = action.data;
			
			let indexToUpdate = subtasks.findIndex(element => element.id == subtask.id);

			return subtasks;
		}

		case 'SUBTASK_REMOVED': {
			let subtasks = state.slice();
			let id = action.data.subtaskId;
			
			let indexToRemove = subtasks.findIndex(element => element.id == id);
    		subtasks.splice(indexToRemove, 1);

			return subtasks;
		}

		default:
			return state;
	}
}

export default subtasks;

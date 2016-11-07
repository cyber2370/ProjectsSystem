const ADD_SUBTASKS 	 = 'ADD_SUBTASKS',
	  ADD_SUBTASK 	 = 'ADD_SUBTASK',
	  UPDATE_SUBTASK = 'UPDATE_SUBTASK',
	  REMOVE_SUBTASK = 'REMOVE_SUBTASK';

export function addSubtasks(subtasks) {
	console.log("addSubtasks: " + subtasks);
	return {
		type: ADD_SUBTASKS,
		subtasks
	}
}


export function addSubtask(taskId, subtask) {
	console.log("addSubtask: " + taskId, subtask);
	return {
		type: ADD_SUBTASK,
		subtask,
		taskId
	}
}

export function updateSubtask(subtask) {
	console.log("updateSubtask: " + subtask);
	return {
		type: UPDATE_SUBTASK,
		subtask
	}
}

export function removeSubtask(id) {
	console.log("removeSubtask: " + id);
	return {
		type: REMOVE_SUBTASK,
		id
	}
}
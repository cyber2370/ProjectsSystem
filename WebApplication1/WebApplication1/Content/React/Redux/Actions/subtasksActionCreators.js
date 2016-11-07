const ADD_SUBTASK 	 = 'ADD_SUBTASK',
	  UPDATE_SUBTASK = 'UPDATE_SUBTASK',
	  REMOVE_SUBTASK = 'REMOVE_SUBTASK';


export function addSubtask(taskId, subtask) {
	return {
		type: ADD_SUBTASK,
		subtask,
		taskId
	}
}

export function updateSubtask(subtask) {
	return {
		type: UPDATE_SUBTASK,
		subtask
	}
}

export function removeSubtask(id) {
	return {
		type: REMOVE_SUBTASK,
		id
	}
}
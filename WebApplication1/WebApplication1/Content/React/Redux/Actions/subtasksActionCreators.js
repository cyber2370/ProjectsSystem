export function addSubtask(id, name, description, duration) {
	return {
		type: 'ADD_SUBTASK',
		id,
		name,
		description,
		duration
	}
}

export function removeSubtask(id) {
	return {
		type: 'REMOVE_SUBTASK',
		id
	}
}
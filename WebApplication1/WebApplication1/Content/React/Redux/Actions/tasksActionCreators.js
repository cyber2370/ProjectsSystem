export function addTask(id, name, description) {
	return {
		type: 'ADD_TASK',
		id,
		name,
		description
	}
}

export function removeTask(id) {
	return {
		type: 'REMOVE_TASK',
		id
	}
}
export function addProject(id, name, owner) {
	return {
		type: 'ADD_PROJECT',
		id,
		name,
		owner
	}
}

export function removeProject(id) {
	return {
		type: 'REMOVE_PROJECT',
		id
	}
}
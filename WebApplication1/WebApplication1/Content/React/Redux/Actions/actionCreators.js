export function addProject(projectName, ownerName) {
	return {
		type: 'ADD_PROJECT',
		projectName,
		ownerName
	}
}

export function removeProject(projectId) {
	return {
		type: 'REMOVE_PROJECT',
		projectId
	}
}
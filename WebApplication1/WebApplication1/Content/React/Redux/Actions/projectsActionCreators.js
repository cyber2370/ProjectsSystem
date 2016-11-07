const ADD_PROJECT 	 = 'ADD_PROJECT',
	  UPDATE_PROJECT = 'UPDATE_PROJECT',
	  REMOVE_PROJECT = 'REMOVE_PROJECT';


export function addProject(project) {
	return {
		type: ADD_PROJECT,
		project
	}
}

export function updateProject(project) {
	return {
		type: UPDATE_PROJECT,
		project
	}
}

export function removeProject(id) {
	return {
		type: REMOVE_PROJECT,
		id
	}
}
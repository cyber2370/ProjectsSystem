const ADD_PROJECTS 	 = 'ADD_PROJECTS',
	  ADD_PROJECT 	 = 'ADD_PROJECT',
	  UPDATE_PROJECT = 'UPDATE_PROJECT',
	  REMOVE_PROJECT = 'REMOVE_PROJECT';

export function addProjects(projects) {
	console.log("addProjects: " + projects);
	return {
		type: ADD_PROJECTS,
		projects
	}
}

export function addProject(project) {
	console.log("addProject: " + project);
	return {
		type: ADD_PROJECT,
		project
	}
}

export function updateProject(project) {
	console.log("updateProject: " + project);
	return {
		type: UPDATE_PROJECT,
		project
	}
}

export function removeProject(id) {
	console.log("removeProject: " + id);
	return {
		type: REMOVE_PROJECT,
		id
	}
}
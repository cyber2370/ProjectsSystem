function projects(state = [], action) {
	switch (action.type) {
		case 'PROJECTS_LOADED': {
			let recievedProjects = action.data;

			return recievedProjects;
		}

		case 'PROJECT_LOADED': {
			let recievedProject = action.data;
			return [
				...state,
				recievedProject
			];
		}

		case 'PROJECT_UPLOADED': {
			return [
				...state,
				action.data
			];
		}

		case 'PROJECT_UPDATED': {
			let projects = state.slice();

			let updatedProject = action.data;
			
			let indexToUpdate = projects.findIndex(element => element.id == updatedProject.id);

			projects[indexToUpdate] = updatedProject;

			return projects;
		}

		case 'PROJECT_REMOVED': {
			let projects = state.slice();

			let id = action.data.projectId;
			
			let indexToRemove = projects.findIndex((element, index, array) => element.id == id);
    		projects.splice(indexToRemove, 1);

			return projects;
		}

		default:
			return state;

	}
}

export default projects;
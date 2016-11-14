function projects(state = [], action) {
	switch (action.type) {
		case 'ADD_PROJECTS':
			return action.projects;
		case 'ADD_PROJECT':
			return [
				...state,
				action.project
			];
		case 'UPDATE_PROJECT':
			var projects = state.slice();
			
			var indexToUpdate = projects.findIndex(element => element.id == action.project.id);

			projects[indexToUpdate].name = action.project.name;
			projects[indexToUpdate].owner = action.project.owner;

			return projects;
		case 'REMOVE_PROJECT':
			var projects = state.slice();
			
			var indexToRemove = projects.findIndex((element, index, array) => element.id == action.id);
    		projects.splice(indexToRemove, 1);

			return projects;
		default:
			return state;
	}
}

export default projects;
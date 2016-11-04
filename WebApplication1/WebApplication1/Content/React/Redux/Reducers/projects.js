function projects(state = [], action) {
	switch (action.type) {
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
function projects(state = [], action) {
	switch (action.type) {
		case 'REMOVE_PROJECT':
			var projects = state.slice();
			
			var elementToRemove = projects.find((element, index, array) => element.id == action.id);
			var indexToRemove = projects.indexOf(elementToRemove);
    		projects.splice(indexToRemove, 1);

			return projects;
		default:
			return state;
	}
}

export default projects;
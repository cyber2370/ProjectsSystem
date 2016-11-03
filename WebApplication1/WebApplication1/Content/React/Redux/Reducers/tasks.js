function tasks(state = [], action) {
	switch (action.type) {
		case 'REMOVE_TASK':
			var newState = state.slice();
			
			var elementToRemove = newState.find((element, index, array) => element.id == action.id);
			var indexToRemove = newState.indexOf(elementToRemove);
    		newState.splice(indexToRemove, 1);

			return newState;
		default:
			return state;
	}
}

export default tasks;
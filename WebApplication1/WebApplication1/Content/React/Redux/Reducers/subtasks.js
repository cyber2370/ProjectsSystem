function subtasks(state = [], action) {
	switch (action.type) {
		case 'REMOVE_SUBTASK':
			var newState = state.slice();
			
			var indexToRemove = newState.findIndex((element, index, array) => element.id == action.id);
    		newState.splice(indexToRemove, 1);

			return newState;
		default:
			return state;
	}
}

export default subtasks;
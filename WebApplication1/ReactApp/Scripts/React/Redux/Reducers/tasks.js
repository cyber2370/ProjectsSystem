	function tasks(state = [], action) {
	switch (action.type) {
		case 'TASKS_LOADED': {
			console.log("TASKS_LOADED");
			return action.data;
		}
			
		case 'TASK_LOADED': {
			console.log("TASK_LOADED");
			return [
				...state,
				action.data
			];
		}

		case 'TASK_UPLOADED': {
			return [
				...state,
				action.data
			];
		}

		case 'TASK_UPDATED':{
			let tasks = state.slice();
			let task = action.data;
			
			let indexToUpdate = tasks.findIndex(element => element.id == task.id);

			tasks[indexToUpdate] = task;

			return tasks;
		}

		case 'TASK_REMOVED':{
			let tasks = state.slice();
			let id = action.data.taskId;
			
			let indexToRemove = tasks.findIndex(element => element.id == id);
    		tasks.splice(indexToRemove, 1);

			return tasks;
		}

		default:
			return state;
	}
}

export default tasks;

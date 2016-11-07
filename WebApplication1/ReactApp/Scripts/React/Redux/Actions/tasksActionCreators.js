const ADD_TASKS   = 'ADD_TASKS',
	  ADD_TASK 	  = 'ADD_TASK',
	  UPDATE_TASK = 'UPDATE_TASK',
	  REMOVE_TASK = 'REMOVE_TASK';

export function addTasks(tasks) {
	console.log("addTasks: " + tasks);
	return {
		type: ADD_TASKS,
		tasks
	}
}

export function addTask(projectId, task) {
	console.log("addTask: " + projectId, task);
	return {
		type: ADD_TASK,
		task,
		projectId
	}
}

export function updateTask(task) {
	console.log("updateTask: " + task);
	return {
		type: UPDATE_TASK,
		task
	}
}

export function removeTask(id) {
	console.log("removeTask: " + id);
	return {
		type: REMOVE_TASK,
		id
	}
}
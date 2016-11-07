﻿const ADD_TASK 	 = 'ADD_TASK',
	  UPDATE_TASK = 'UPDATE_TASK',
	  REMOVE_TASK = 'REMOVE_TASK';


export function addTask(projectId, task) {
	return {
		type: ADD_TASK,
		task,
		projectId
	}
}

export function updateTask(task) {
	return {
		type: UPDATE_TASK,
		task
	}
}

export function removeTask(id) {
	return {
		type: REMOVE_TASK,
		id
	}
}
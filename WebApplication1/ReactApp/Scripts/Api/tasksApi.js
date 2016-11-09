import {
	getAsync, 
	postAsync,
	putAsync,
	deleteAsync	
} from './ajaxRequests';

let baseTasksUrl = 'tasks/';

export function getTasksAsync(callback) {
	let url = baseTasksUrl;

	return getAsync(url, {
		success: callback
	});
}

export function getTasksByProjectIdAsync(projectId, callback) {
	let url = 'projects/' +  projectId + '/tasks/';

	return getAsync(url, {
		success: callback
	});
}

export function getTaskByIdAsync(taskId, callback) {
	let url = baseTasksUrl + taskId + '/';

	return getAsync(url, {
		success: callback
	});
}

export function addTaskAsync(projectId, task, callback) {
	let url = 'projects/' +  projectId + '/tasks/';

	let addTaskCallback = function(updatedTask){
		 callback(updatedTask.projectId, updatedTask);
	};

	return postAsync(url, task, {
		success: addTaskCallback
	});
}

export function updateTaskAsync(task, callback) {
	let url = baseTasksUrl;

	return putAsync(url, task, {
		success: callback
	});
}

export function deleteTaskAsync(taskId, callback) {
	let url = baseTasksUrl + taskId + '/';

	let removeTaskCallback = function() {
		callback(taskId);
	};

	return deleteAsync(url, {
		success: removeTaskCallback
	});
}

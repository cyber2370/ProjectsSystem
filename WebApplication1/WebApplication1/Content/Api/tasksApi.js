import {
	getAsync, 
	postAsync,
	putAsync,
	deleteAsync	
} from './ajaxRequests';

let baseUrl = "http://localhost:54243/api/"
let baseTasksUrl = baseUrl + 'tasks/';

let baseAjaxSettings = {};

export function getTasksAsync(callback) {
	let url = baseTasksUrl;

	baseAjaxSettings.success = callback;

	return getAsync(url, baseAjaxSettings);
}

export function getTasksByProjectIdAsync(projectId, callback) {
	let url = baseUrl + 'projects/' +  projectId + '/tasks/';

	baseAjaxSettings.success = callback;

	return getAsync(url, baseAjaxSettings);
}

export function getTaskByIdAsync(taskId, callback) {
	let url = baseTasksUrl + taskId + '/';

	baseAjaxSettings.success = callback;

	return getAsync(url, baseAjaxSettings);
}

export function addTaskAsync(projectId, task, callback) {
	let url = baseUrl + 'projects/' +  projectId + '/tasks/';

	baseAjaxSettings.success = function(updatedTask){
		 callback(updatedTask.projectId, updatedTask);
	};

	return postAsync(url, task, baseAjaxSettings);
}

export function updateTaskAsync(task, callback) {
	let url = baseTasksUrl;

	baseAjaxSettings.success = callback;

	return putAsync(url, task, baseAjaxSettings);
}

export function deleteTaskAsync(taskId, callback) {
	let url = baseTasksUrl + taskId + '/';

	baseAjaxSettings.success = function() {
		callback(taskId);
	};

	return deleteAsync(url, baseAjaxSettings);
}

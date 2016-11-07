import {
	getAsync, 
	postAsync,
	putAsync,
	deleteAsync	
} from './ajaxRequests';

let baseUrl = "http://localhost:54243/api/"
let baseTasksUrl = baseUrl + 'tasks/';

let baseAjaxSettings = {};

export function getTasksAsync() {
	let url = baseTasksUrl;

	return getAsync(url, baseAjaxSettings);
}

export function getTasksByProjectIdAsync(projectId) {
	let url = baseUrl + 'projects/' +  projectId + '/tasks/';

	return getAsync(url, baseAjaxSettings);
}

export function getTaskByIdAsync(taskId) {
	let url = baseTasksUrl + taskId + '/';

	return getAsync(url, baseAjaxSettings);
}

export function addTaskAsync(projectId, task) {
	let url = baseUrl + 'projects/' +  projectId + '/tasks/';

	return postAsync(url, task, baseAjaxSettings);
}

export function updateTaskAsync(task) {
	let url = baseTasksUrl;

	return putAsync(url, task, baseAjaxSettings);
}

export function deleteTaskAsync(taskId) {
	let url = baseTasksUrl + taskId + '/';

	return deleteAsync(url, baseAjaxSettings);
}

import * from './ajaxRequests';

let baseUrl = "http://localhost:54243/api/"
let baseSubtasksUrl = baseUrl + 'subtasks/';

let baseAjaxSettings = {};

export function getSubtasksAsync() {
	let url = baseSubtasksUrl;

	return getAsync(url, baseAjaxSettings);
}

export function getSubtasksByTaskIdAsync(taskId) {
	let url = baseUrl + 'tasks/' +  taskId + '/subtasks/';

	return getAsync(url, baseAjaxSettings);
}

export function getSubtaskByIdAsync(id) {
	let url = baseSubtasksUrl + id + '/';

	return getAsync(url, baseAjaxSettings);
}

export function addTaskAsync(taskId, subtask) {
	let url = baseUrl + 'tasks/' +  taskId + '/subtasks/';

	return postAsync(url, subtask, baseAjaxSettings);
}

export function updateSubtaskAsync(subtask) {
	let url = baseSubtasksUrl;

	return putAsync(url, subtask, baseAjaxSettings);
}

export function deleteSubtaskAsync(subtaskId) {
	let url = baseSubtasksUrl + subtaskId + '/';

	return putAsync(url, baseAjaxSettings);
}

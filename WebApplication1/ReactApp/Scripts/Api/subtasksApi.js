import {
	getAsync, 
	postAsync,
	putAsync,
	deleteAsync	
} from './ajaxRequests';

let baseUrl = "http://localhost:42549/api/"
let baseSubtasksUrl = baseUrl + 'subtasks/';

let baseAjaxSettings = {
	error: console.log
};

export function getSubtasksAsync(callback) {
	let url = baseSubtasksUrl;

	baseAjaxSettings.success = callback;

	return getAsync(url, baseAjaxSettings);
}

export function getSubtasksByTaskIdAsync(taskId, callback) {
	let url = baseUrl + 'tasks/' +  taskId + '/subtasks/';

	baseAjaxSettings.success = callback;

	return getAsync(url, baseAjaxSettings);
}

export function getSubtaskByIdAsync(id, callback) {
	let url = baseSubtasksUrl + id + '/';

	baseAjaxSettings.success = callback;

	return getAsync(url, baseAjaxSettings);
}

export function addSubtaskAsync(taskId, subtask, callback) {
	let url = baseUrl + 'tasks/' +  taskId + '/subtasks/';

	baseAjaxSettings.success = function(updatedSubtask) {
		callback(updatedSubtask.taskId, updatedSubtask);
	};

	return postAsync(url, subtask, baseAjaxSettings);
}

export function updateSubtaskAsync(subtask, callback) {
	let url = baseSubtasksUrl;

	baseAjaxSettings.success = callback;

	return putAsync(url, subtask, baseAjaxSettings);
}

export function deleteSubtaskAsync(subtaskId, callback) {
	let url = baseSubtasksUrl + subtaskId + '/';

	baseAjaxSettings.success = function() {
		callback(subtaskId);
	};

	return deleteAsync(url, baseAjaxSettings);
}

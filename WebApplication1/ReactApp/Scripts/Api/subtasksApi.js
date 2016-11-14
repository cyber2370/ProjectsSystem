import {
	getAsync, 
	postAsync,
	putAsync,
	deleteAsync	
} from './ajaxRequests';

let baseSubtasksUrl = 'subtasks/';

export function getSubtasksAsync() {
	let url = baseSubtasksUrl;

	return getAsync(url);
}

export function getSubtasksByTaskIdAsync(data) {
	let { taskId } = data; 
	let url = 'tasks/' +  taskId + '/subtasks/';

	return getAsync(url);
}

export function getSubtaskByIdAsync(data) {
	let { subtaskId } = data; 
	let url = baseSubtasksUrl + subtaskId + '/';

	return getAsync(url);
}

export function addSubtaskAsync(data) {
	let { taskId, subtask } = data; 
	console.log("addSubtaskAsync", data, taskId, subtask);
	let url = 'tasks/' +  taskId + '/subtasks/';

	return postAsync(url, subtask);
}

export function updateSubtaskAsync(data) {
	let { subtask } = data; 
	let url = baseSubtasksUrl;

	return putAsync(url, subtask);
}

export function deleteSubtaskAsync(data) {
	let { subtaskId } = data; 
	let url = baseSubtasksUrl + subtaskId + '/';

	return deleteAsync(url);
}

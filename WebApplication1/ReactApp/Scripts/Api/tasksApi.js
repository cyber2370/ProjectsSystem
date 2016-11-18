import {
	getAsync, 
	postAsync,
	putAsync,
	deleteAsync	
} from './ajaxRequests';

let baseTasksUrl = 'tasks/';

export function getTasksAsync() {
	let url = baseTasksUrl;

	return getAsync(url);
}

export function getTasksByProjectIdAsync(data) {
	let { projectId } = data; 
	let url = 'projects/' +  projectId + '/tasks/';

	console.log("getTasksByProjectIdAsync", projectId, data);

	return getAsync(url);
}

export function getTaskByIdAsync(data) {
	let { taskId } = data; 
	let url = baseTasksUrl + taskId + '/';

	return getAsync(url);
}

export function addTaskAsync(data) {
	let { projectId, task } = data; 
	let url = 'projects/' +  projectId + '/tasks/';

	return postAsync(url, task);
}

export function updateTaskAsync(data) {
	let { task } = data; 
	let url = baseTasksUrl;

	return putAsync(url, task);
}

export function deleteTaskAsync(data) {
	let { taskId } = data; 
	let url = baseTasksUrl + taskId + '/';

	return deleteAsync(url);
}

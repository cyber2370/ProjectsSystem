import {
	getAsync, 
	postAsync,
	putAsync,
	deleteAsync	
} from './ajaxRequests';

let baseSubtasksUrl = 'subtasks/';

export function getSubtasksAsync(callback) {
	let url = baseSubtasksUrl;

	return getAsync(url, {
		success: callback
	});
}

export function getSubtasksByTaskIdAsync(taskId, callback) {
	let url = 'tasks/' +  taskId + '/subtasks/';

	return getAsync(url, {
		success: callback
	});
}

export function getSubtaskByIdAsync(id, callback) {
	let url = baseSubtasksUrl + id + '/';

	return getAsync(url, {
		success: callback
	});
}

export function addSubtaskAsync(taskId, subtask, callback) {
	let url = 'tasks/' +  taskId + '/subtasks/';

	let addSubtaskCallback = function(updatedSubtask) {
		callback(updatedSubtask.taskId, updatedSubtask);
	};

	return postAsync(url, subtask, {
		success: addSubtaskCallback
	});
}

export function updateSubtaskAsync(subtask, callback) {
	let url = baseSubtasksUrl;

	return putAsync(url, subtask, {
		success: callback
	});
}

export function deleteSubtaskAsync(subtaskId, callback) {
	let url = baseSubtasksUrl + subtaskId + '/';

	let removeCallback = function() {
			callback(subtaskId);
		};

	return deleteAsync(url, {
		success: removeCallback
	});
}

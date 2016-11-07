import {
	getAsync, 
	postAsync,
	putAsync,
	deleteAsync	
} from './ajaxRequests';

let baseUrl = "http://localhost:54243/api/"
let baseProjectsUrl = baseUrl + 'projects/';

let baseAjaxSettings = {};

export function getProjectsAsync(callback) {
	let url = baseProjectsUrl;

	baseAjaxSettings.success = callback;

	return getAsync(url, baseAjaxSettings);
}

export function getProjectByIdAsync(projectId, callback) {
	let url = baseProjectsUrl + projectId + '/';

	baseAjaxSettings.success = callback;

	return getAsync(url, baseAjaxSettings);
}

export function addProjectAsync(project, callback) {
	let url = baseProjectsUrl;

	baseAjaxSettings.success = callback;

	return postAsync(url, project, baseAjaxSettings);
}

export function updateProjectAsync(project, callback) {
	let url = baseProjectsUrl;

	baseAjaxSettings.success = callback;

	return putAsync(url, project, baseAjaxSettings);
}

export function deleteProjectAsync(projectId, callback) {
	let url = baseProjectsUrl + projectId + '/';

	baseAjaxSettings.success = function() {
		callback(projectId);
	};

	return deleteAsync(url, baseAjaxSettings);
}

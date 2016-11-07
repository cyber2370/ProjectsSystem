import * from './ajaxRequests';

let baseUrl = "http://localhost:54243/api/"
let baseProjectsUrl = baseUrl + 'projects/';

let baseAjaxSettings = {};

export function getProjectsAsync() {
	let url = baseProjectsUrl;

	return getAsync(url, baseAjaxSettings);
}

export function getProjectByIdAsync(projectId) {
	let url = baseProjectsUrl + projectId + '/';

	return getAsync(url, baseAjaxSettings);
}

export function addProjectAsync(project) {
	let url = baseProjectsUrl;

	return postAsync(url, project, baseAjaxSettings);
}

export function updateProjectAsync(project) {
	let url = baseProjectsUrl;

	return putAsync(url, project, baseAjaxSettings);
}

export function deleteProjectAsync(projectId) {
	let url = baseProjectsUrl + projectId + '/';

	return putAsync(url, baseAjaxSettings);
}

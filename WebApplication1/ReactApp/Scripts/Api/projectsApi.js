import {
	getAsync, 
	postAsync,
	putAsync,
	deleteAsync	
} from './fetchRequests';

let baseProjectsUrl = 'projects/';

export function getProjectsAsync() {
	let url = baseProjectsUrl;

	return getAsync(url);
}

export function getProjectByIdAsync(data) {
	let { projectId } = data; 
	let url = baseProjectsUrl + projectId + '/';

	return getAsync(url);	
}

export function addProjectAsync(data) {
	let { project } = data; 
	let url = baseProjectsUrl;

	return postAsync(url, project);
}

export function updateProjectAsync(data) {
	let { project } = data; 
	let url = baseProjectsUrl;

	return putAsync(url, project);
}

export function deleteProjectAsync(data) {
	let { projectId } = data; 
	let url = baseProjectsUrl + projectId + '/';

	/*let deleteProjectCallback = function() {
		callback(projectId);
	};*/

	return deleteAsync(url);
}
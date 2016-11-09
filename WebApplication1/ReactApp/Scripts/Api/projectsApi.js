import {
	getAsync, 
	postAsync,
	putAsync,
	deleteAsync	
} from './ajaxRequests';

let baseProjectsUrl = 'projects/';

export function getProjectsAsync(callback) {
	let url = baseProjectsUrl;

	return getAsync(url, {
		success: callback
	});
}

export function getProjectByIdAsync(projectId, callback) {
	let url = baseProjectsUrl + projectId + '/';

	return getAsync(url, {
		success: callback
	});	
}

export function addProjectAsync(project, callback) {
	let url = baseProjectsUrl;

	return postAsync(url, project, {
		success: callback
	});
}

export function updateProjectAsync(project, callback) {
	let url = baseProjectsUrl;

	return putAsync(url, project, {
		success: callback
	});
}

export function deleteProjectAsync(projectId, callback) {
	let url = baseProjectsUrl + projectId + '/';

	let deleteProjectCallback = function() {
		callback(projectId);
	};

	return deleteAsync(url, {
		success: deleteProjectCallback
	});
}

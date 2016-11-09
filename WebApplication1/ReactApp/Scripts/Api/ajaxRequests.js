const queryTypes = {
	GET: "GET",
	POST: "POST",
	PUT: "PUT",
	DELETE: "DELETE"
};

let baseAjaxSettings = {
	error: console.log,
    crossDomain: true
};

let baseUrl = "http://localhost:55555/api/"

export function getAsync(specifyingUrl, specifyingSettings = {}) {
	let url = baseUrl + specifyingUrl;

	let settings = Object.assign({}, specifyingSettings, baseAjaxSettings);
	settings.type = queryTypes.GET;

	console.log(specifyingSettings, baseAjaxSettings, settings);

	return $.ajax(url, settings);
}

export function postAsync(specifyingUrl, data, specifyingSettings = {}) {
	let url = baseUrl + specifyingUrl;

	let settings = Object.assign({}, specifyingSettings, baseAjaxSettings);
	settings.type = queryTypes.POST;
	settings.data = data;

	return $.ajax(url, settings);
}

export function putAsync(specifyingUrl, data, specifyingSettings = {}) {
	let url = baseUrl + specifyingUrl;

	let settings = Object.assign({}, specifyingSettings, baseAjaxSettings);
	settings.type = queryTypes.PUT;
	settings.data = data;

	return $.ajax(url, settings);
}

export function deleteAsync(specifyingUrl, specifyingSettings = {}) {
	let url = baseUrl + specifyingUrl;

	let settings = Object.assign({}, specifyingSettings, baseAjaxSettings);
	settings.type = queryTypes.DELETE;

	return $.ajax(url, settings);
}
﻿const queryTypes = {
	GET: "GET",
	POST: "POST",
	PUT: "PUT",
	DELETE: "DELETE"
};

export function getAsync(url, settings) {
	settings.type = queryTypes.GET;

	return $.ajax(url, settings).done(data => data);
}

export function postAsync(url, data, settings) {
	settings.type = queryTypes.POST;
	settings.data = data;

	return $.ajax(url, settings)
				.done();
}

export function putAsync(url, data, settings) {
	settings.type = queryTypes.PUT;
	settings.data = data;

	return $.ajax(url, settings).done(data => data);
}

export function deleteAsync(url, settings) {
	settings.type = queryTypes.DELETE;

	return $.ajax(url, settings).done(data => data);
}
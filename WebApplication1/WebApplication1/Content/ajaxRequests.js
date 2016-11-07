const queryTypes = {
	GET: "GET" 
	POST: "POST",
	PUT: "PUT",
	DELETE: "DELETE"
};

export function getAsync(url, settings) {
	return $.ajax(url, {
		...settings, 
		type: queryTypes.GET
	}).done(data => data);
}

export function postAsync(url, data, settings) {
	return $.ajax(url, {
		...settings, 
		type: queryTypes.POST
	}).done(data => data);
}

export function putAsync(url, data, settings) {
	return $.ajax(url, {
		...settings, 
		type: queryTypes.PUT
	}).done(data => data);
}

export function deleteAsync(url, settings) {
	return $.ajax(url, {
		...settings, 
		type: queryTypes.DELETE
	}).done(data => data);
}
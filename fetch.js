const requestUrl = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
	const postParams = method === 'POST' ? {
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json'
		}
	} : {};

	return fetch(url, {
		method,
		...postParams
	}).then(response => {
		if(response.ok) return response.json();
		return response.json().then(error => {
			const err = new Error('Something gone wrong...');
			err.data	= error;
			throw err;
		});
	});
}

sendRequest('GET', requestUrl)
	.then(data =>  console.log('GET:', data))
	.catch(error => console.error(error))

const body = {
	name: 'Andrey',
	age: 27
}

sendRequest('POST', requestUrl, body)
	.then(data => console.log('POST:',data))
	.catch(error => console.error(error))

	
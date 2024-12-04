export const fetchEvents = async ({ signal, searchTerm }) => {
	console.log('----------------------------');
	console.log(`searchTerm: >> `, searchTerm);
	console.log('----------------------------');
	let baseUrl = 'http://localhost:3000/events';
	if (searchTerm) baseUrl += `?search=${searchTerm}`;

	const response = await fetch(baseUrl, { signal });

	if (!response.ok) {
		const error = new Error('An error occurred while fetching the events');
		error.code = response.status;
		error.info = await response.json();
		throw error;
	}

	const { events } = await response.json();

	return events;
};

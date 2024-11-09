const apiUrl = 'http://localhost:3000';

const fetchAvailablePlaces = async (url) => {
  const baseUrl = url || apiUrl
	const response = await fetch(`${baseUrl}/places`);

  if (!response.ok) {
		throw new Error(data.message || 'Failed to fetch places.');
	}
	const { places } = await response.json();
	return places;
};

const updateUserPlaces = async (places) => {
  const response = await fetch(`${apiUrl}/user-places`, {
		method: 'PUT',
		body: JSON.stringify({places}),
		headers: {
			'Content-Type': 'application/json',
		},
	});

  if (!response.ok) {
    throw new Error(data.message || 'Failed to update user places.');
  }
  const data = await response.json();
  return data.message;
}

const getUserPlaces = async () => {
  const response = await fetch(`${apiUrl}/user-places`);

  if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch user places.');
  }
  const { places } = await response.json();
  return places;
}

export { fetchAvailablePlaces, updateUserPlaces, getUserPlaces };

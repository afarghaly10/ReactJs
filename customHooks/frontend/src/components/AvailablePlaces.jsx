import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import ErrorPage from '../shared/Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../api.js';

let sortedPlaces = navigator.geolocation.getCurrentPosition((position) => {
	const latitude = position.coords.latitude
		? position.coords.latitude
		: 37.7749;

	const longitude = position.coords.longitude
		? position.coords.longitude
		: -122.4194;

	// sort places by distance
	return sortPlacesByDistance(places, latitude, longitude);
});
export default function AvailablePlaces({ onSelectPlace }) {
	const [places, setPlaces] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();

	useEffect(() => {
		setIsLoading(true);
		const getPlaces = async () => {
			try {
				const places = await fetchAvailablePlaces();

				sortedPlaces = sortedPlaces || places;
				setPlaces(sortedPlaces);
				setIsLoading(false);
			} catch (error) {
				setError(error);
				console.error('Error fetching places:', error);
				setIsLoading(false);
			}
		};
		getPlaces();
	}, []);

	if (error) {
		return <ErrorPage title="Error fetching places" message={error.message} />;
	}

	return (
		<Places
			title="Available Places"
			places={places}
			isLoading={isLoading}
			loadingText="Fetching"
			fallbackText="No places available."
			onSelectPlace={onSelectPlace}
		/>
	);
}

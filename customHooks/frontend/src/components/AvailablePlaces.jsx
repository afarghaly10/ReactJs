import Places from './Places.jsx';
import ErrorPage from '../shared/Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../api.js';
import { useFetch } from '../hooks/useFetch.js';

const fetchSortedPlaces = async () => {
	const places = await fetchAvailablePlaces();

	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition((position) => {
			const latitude = position.coords.latitude
				? position.coords.latitude
				: 37.7749;

			const longitude = position.coords.longitude
				? position.coords.longitude
				: -122.4194;

			resolve(sortPlacesByDistance(places, latitude, longitude));
		});
	});
};
export default function AvailablePlaces({ onSelectPlace }) {
	const {
		isLoading,
		error,
		apiData: places,
	} = useFetch(fetchAvailablePlaces, []);

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

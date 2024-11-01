import { useRef, useState, useEffect, useCallback } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';

const storedIds = JSON.parse(localStorage.getItem('pickedPlaces')) || [];
const storedPlaces = storedIds.map((id) =>
	AVAILABLE_PLACES.find((place) => place.id === id)
);

function App() {
	const selectedPlace = useRef();
	const [isModalOpen, setIsModalOpen] = useState();
	const [availablePlaces, setAvailablePlaces] = useState([]);
	const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);

	// location retrieval method provided by the browser
	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			const sortedPlaces = sortPlacesByDistance(
				AVAILABLE_PLACES,
				position.coords.latitude,
				position.coords.longitude
			);
			setAvailablePlaces(sortedPlaces);
		});
	}, []);

	function handleStartRemovePlace(id) {
		setIsModalOpen(true);
		selectedPlace.current = id;
	}

	function handleStopRemovePlace() {
		setIsModalOpen(false);
	}

	function handleSelectPlace(id) {
		setPickedPlaces((prevPickedPlaces) => {
			if (prevPickedPlaces.some((place) => place.id === id)) {
				return prevPickedPlaces;
			}
			const place = AVAILABLE_PLACES.find((place) => place.id === id);
			return [place, ...prevPickedPlaces];
		});
		const storedIds = JSON.parse(localStorage.getItem('pickedPlaces')) || [];
		if (storedIds.indexOf(id) === -1) {
			localStorage.setItem('pickedPlaces', JSON.stringify([id, ...storedIds]));
		}
	}

	const handleRemovePlace = useCallback((handleRemovePlace) => {
		setPickedPlaces((prevPickedPlaces) =>
			prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
		);
		setIsModalOpen(false);
		const storedIds = JSON.parse(localStorage.getItem('pickedPlaces')) || [];
		localStorage.setItem(
			'pickedPlaces',
			JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current))
		);
	}, []);

	const loading = (
		<>
			<div className="terminal-loader">
				<div className="terminal-header">
					<div className="terminal-title">Status</div>
					<div className="terminal-controls">
						<div className="control close"></div>
						<div className="control minimize"></div>
						<div className="control maximize"></div>
					</div>
				</div>
				<div className="text">Loading...</div>
			</div>
		</>
	);

	return (
		<>
			<Modal open={isModalOpen} onClose={handleStopRemovePlace}>
				<DeleteConfirmation
					onCancel={handleStopRemovePlace}
					onConfirm={handleRemovePlace}
				/>
			</Modal>

			<header>
				<img src={logoImg} alt="Stylized globe" />
				<h1>Locations Art Gallery</h1>
				<p>Choose your top location artwork.</p>
			</header>
			<main>
				<Places
					title="My top picks are ..."
					fallbackText={'Select the artwork you like the most below.'}
					places={pickedPlaces}
					onSelectPlace={handleStartRemovePlace}
				/>
				<Places
					title="Artwork Collection"
					places={availablePlaces}
					fallbackText={loading}
					onSelectPlace={handleSelectPlace}
				/>
			</main>
		</>
	);
}

export default App;

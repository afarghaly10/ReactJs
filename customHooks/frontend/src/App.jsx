import { useRef, useState, useCallback } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { updateUserPlaces, getUserPlaces } from './api.js';
import ErrorPage from './shared/Error.jsx';
import { useFetch } from './hooks/useFetch.js';

function App() {
	const selectedPlace = useRef();

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();

	const {
		isLoading,
		error,
		apiData: userPlaces,
		setApiData: setUserPlaces,
	} = useFetch(getUserPlaces, []);

	function handleStartRemovePlace(place) {
		setModalIsOpen(true);
		selectedPlace.current = place;
	}

	function handleStopRemovePlace() {
		setModalIsOpen(false);
	}

	async function handleSelectPlace(selectedPlace) {
		setUserPlaces((prevPickedPlaces) => {
			if (!prevPickedPlaces) {
				prevPickedPlaces = [];
			}
			if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
				return prevPickedPlaces;
			}
			return [selectedPlace, ...prevPickedPlaces];
		});
		try {
			await updateUserPlaces([selectedPlace, ...userPlaces]);
		} catch (error) {
			setUserPlaces(userPlaces);
			setErrorUpdatingPlaces({
				message: error?.message || 'Failed to update places.',
			});
		}
	}

	const handleRemovePlace = useCallback(
		async function handleRemovePlace() {
			setUserPlaces((prevPickedPlaces) =>
				prevPickedPlaces.filter(
					(place) => place.id !== selectedPlace.current.id
				)
			);
			setModalIsOpen(false);

			try {
				await updateUserPlaces(
					userPlaces.filter((place) => place.id !== selectedPlace.current.id)
				);
			} catch (error) {
				setUserPlaces(userPlaces);
				setErrorUpdatingPlaces({
					message: error?.message || 'Failed to update places.',
				});
			}
		},
		[userPlaces, setUserPlaces]
	);

	return (
		<>
			<Modal
				title="Error updating places"
				open={errorUpdatingPlaces}
				onClose={() => setErrorUpdatingPlaces(null)}
			>
				{errorUpdatingPlaces && (
					<ErrorPage
						title="Error updating places"
						message={errorUpdatingPlaces?.message}
					/>
				)}
			</Modal>
			<Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
				<DeleteConfirmation
					onCancel={handleStopRemovePlace}
					onConfirm={handleRemovePlace}
				/>
			</Modal>

			<header>
				<img src={logoImg} alt="Stylized globe" />
				<h1>Palces Artwork</h1>
				<p>
					Create your personal collection of artwork places you would like to
					visit or you have visited.
				</p>
			</header>
			<main>
				{error && (
					<ErrorPage title="Error fetching places" message={error.message} />
				)}
				{!error && (
					<Places
						title="Artwork I favorite ..."
						isLoading={isLoading}
						loadingText="Loading your places ..."
						fallbackText="Select the places artwork you would like to visit below."
						places={userPlaces}
						onSelectPlace={handleStartRemovePlace}
					/>
				)}
				<AvailablePlaces onSelectPlace={handleSelectPlace} />
			</main>
		</>
	);
}

export default App;

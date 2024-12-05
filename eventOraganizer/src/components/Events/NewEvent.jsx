import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';

import { createNewEvent, queryClient } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';

export default function NewEvent() {
	const { mutate, isPending, isError, error } = useMutation({
		mutationFn: createNewEvent,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['events'],
				// exact: true,
			});
			navigate('/events');
		},
	});

	const navigate = useNavigate();

	function handleSubmit(formData) {
		mutate({ event: formData });
	}

	return (
		<Modal onClose={() => navigate('../')}>
			<EventForm onSubmit={handleSubmit}>
				{isPending && <p>Creating event...</p>}
				{!isPending && (
					<>
						<Link to="../" className="button-text">
							Cancel
						</Link>
						<button type="submit" className="button">
							Create
						</button>
					</>
				)}
			</EventForm>
			{isError && (
				<ErrorBlock
					title="An error occurred"
					message={
						error.info?.details ||
						error.info?.message ||
						'Failed to create event'
					}
				/>
			)}
		</Modal>
	);
}

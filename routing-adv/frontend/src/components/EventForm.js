import {
	useNavigate,
	Form,
	useNavigation,
	useActionData,
  json,
  redirect,
} from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
	const navigate = useNavigate();
	const navigation = useNavigation();
	const actionData = useActionData();

	const isSubmitting = navigation.action === 'submitting';

	function cancelHandler() {
		navigate('..');
	}

	return (
		<Form method={method} className={classes.form}>
			{actionData && actionData.errors && (
				<ul>
					{Object.values(actionData.errors).map((error) => (
						<li key={error}>{error}</li>
					))}
				</ul>
			)}
			<p>
				<label htmlFor="title">Title</label>
				<input
					id="title"
					type="text"
					name="title"
					required
					defaultValue={event ? event.title : ''}
				/>
			</p>
			<p>
				<label htmlFor="image">Image</label>
				<input
					id="image"
					type="url"
					name="image"
					required
					defaultValue={event ? event.image : ''}
				/>
			</p>
			<p>
				<label htmlFor="date">Date</label>
				<input
					id="date"
					type="date"
					name="date"
					required
					defaultValue={event ? event.date : ''}
				/>
			</p>
			<p>
				<label htmlFor="description">Description</label>
				<textarea
					id="description"
					name="description"
					rows="5"
					required
					defaultValue={event ? event.description : ''}
				/>
			</p>
			<div className={classes.actions}>
				<button type="button" onClick={cancelHandler} disabled={isSubmitting}>
					Cancel
				</button>
				<button disabled={isSubmitting}>Save</button>
			</div>
		</Form>
	);
}

export default EventForm;

export const eventAction = async ({ request, params }) => {
	const method = request.method;
	const data = await request.formData();
	const eventData = {
		title: data.get('title'),
		description: data.get('description'),
		date: data.get('date'),
		image: data.get('image'),
	};

	let url = 'http://localhost:8080/events';

	if (method === 'PATCH') url += `/${params.eventId}`;

	const response = await fetch(url, {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(eventData),
	});

	if (response.status === 422) {
		return response;
	}

	if (!response.ok) {
		throw json({ message: 'Failed to create event' }, { status: 500 });
	}
	return redirect('/events');
};

import React from 'react';
import { Link } from 'react-router-dom';

const Events = [
	{ id: 'e1', title: 'Event 1', description: 'The first event' },
	{ id: 'e2', title: 'Event 2', description: 'The second event' },
	{ id: 'e3', title: 'Event 3', description: 'The third event' },
];

const EventsPage = () => {
	return (
		<div>
			<h1>Events Page</h1>
			<ul>
				{Events.map((event) => (
					<li key={event.id}>
						<Link to={`/events/${event.id}`}>{event.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default EventsPage;

import { useLoaderData, json } from "react-router-dom";
import EventsList from '../components/EventsList';

function EventsPage() {
  const { events: fetchedEvents } = useLoaderData();
	return (
		<>
			<EventsList events={fetchedEvents} />
		</>
	);
}

export const loader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    return json({ message: 'Failed to fetch events' }, {status: 500});
  } else {
    const resData = await response.json();
    return { events: resData.events };
  }
};

export default EventsPage;

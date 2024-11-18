import React from 'react';
import { json, redirect, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

const EventDetailPage = () => {
  const data = useRouteLoaderData('eventDetail');

	return <EventItem event={data.event} />;
};

export default EventDetailPage;

export const EventDetailLoader = async({request, params}) => {
  const response =  await fetch(`http://localhost:8080/events/${params.eventId}`)

  if (!response.ok) {
    throw json({message: 'Failed to fetch event'}, {status: 500})
  } else {
    return response;
  }

}

export const deleteEventAction = async ({request, params}) => {
  const response = await fetch(`http://localhost:8080/events/${params.eventId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
		throw json({ message: 'Failed to delete event' }, { status: 500 });
	} else {
		return redirect('/events');
	}
}

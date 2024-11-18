import React from 'react';
import { useParams, Link, json, useLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

const EventDetailPage = () => {
	const params = useParams();
  const data = useLoaderData();

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

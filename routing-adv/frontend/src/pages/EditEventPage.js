import React from 'react'
import EventForm from '../components/EventForm'
import { useRouteLoaderData } from "react-router-dom";

const EditEventPage = () => {
  const data = useRouteLoaderData('eventDetail');
  const { event } = data;
  return (
    <EventForm event={event}/>
  )
}

export default EditEventPage

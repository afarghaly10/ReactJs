import {
	createBrowserRouter,
	RouterProvider,
	// createRoutesFromElements,
	// Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventDetailPage, { EventDetailLoader, deleteEventAction } from './pages/EventDetail';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import RootLayout from './pages/RootLayout';
import EventLayout from './pages/EventLayout';
import ErrorPage from './pages/ErrorPage';
import { eventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: 'events',
				element: <EventLayout />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						loader: eventsLoader,
					},
					{
						path: ':eventId',
						id: 'event-detail',
						loader: EventDetailLoader,
						children: [
							{
								index: true,
								element: <EventDetailPage />,
								action: deleteEventAction,
							},
							{
								path: 'edit',
								element: <EditEventPage />,
								action: eventAction,
							},
						],
					},
					{
						path: 'new',
						element: <NewEventPage />,
						action: eventAction,
					},
				],
			},
			{
				path: 'newsletter',
				element: <NewsletterPage />,
				action: newsletterAction,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;

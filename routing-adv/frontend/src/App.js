import {
	createBrowserRouter,
	RouterProvider,
	// createRoutesFromElements,
	// Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventDetailPage, { EventDetailLoader, deleteEventAction } from './pages/EventDetail';
import NewEventPage, { newEventAction } from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import RootLayout from './pages/RootLayout';
import EventLayout from './pages/EventLayout';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> }, // path: '' is the default route
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
						id: 'eventDetail',
						loader: EventDetailLoader,
						children: [
							{
								index: true,
								element: <EventDetailPage />,
								action: deleteEventAction,
							},
							{ path: 'edit', element: <EditEventPage /> },
						],
					},
					{ path: 'new', element: <NewEventPage />, action: newEventAction },
				],
			},
		],
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;

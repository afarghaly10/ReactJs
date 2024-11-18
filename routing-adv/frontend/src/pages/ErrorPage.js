import React from 'react';
import MainNavigation from '../components/MainNavigation';
import PageContent from '../components/PageContent';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError();
	let title = 'An Error Occurred';
	let content = <p>Sorry, an error occurred. Please try again later.</p>;

	if (error.status === 404) {
		title = 'Page Not Found';
		content = <p>Sorry, the page you are looking for does not exist.</p>;
	}
	if (error.status === 500) {
		content = JSON.parse(error.data).message;
	}
	return (
		<>
			<MainNavigation />
			<PageContent title={title}>
				{content}
			</PageContent>
		</>
	);
};

export default ErrorPage;

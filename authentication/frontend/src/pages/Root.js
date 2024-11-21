import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';
import { getTokenDuration } from '../utils/auth';

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
	// const navigation = useNavigation();
	const token = useLoaderData();

	// porgrammatically submit a form
	const submit = useSubmit();

	useEffect(() => {
		if (!token) {
			return;
		}

		if (token === 'EXPIRED') {
			submit(null, { action: '/logout', method: 'post' });
			return;
		}

		const tokenDuration = getTokenDuration();
		console.log('----------------------------');
		console.log(`tokenDuration: >> `, tokenDuration);
		console.log('----------------------------');

		setTimeout(() => {
			submit(null, { action: '/logout', method: 'post' });
		}, tokenDuration);
	}, [token, submit]);

	return (
		<>
			<MainNavigation />
			<main>
				{/* {navigation.state === 'loading' && <p>Loading...</p>} */}
				<Outlet />
			</main>
		</>
	);
}

export default RootLayout;

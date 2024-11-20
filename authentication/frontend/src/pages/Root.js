import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

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

		setTimeout(() => {
			submit(null, { action: '/logout', method: 'post' });
		}, 3600000);
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

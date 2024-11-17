import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import Classes from './RootLayout.module.css';

const RootLayout = () => {
	return (
		<>
			<MainNavigation />
			<main className={Classes.content}>
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;

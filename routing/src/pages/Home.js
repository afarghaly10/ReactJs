import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<h1>Home Page</h1>
			<p>
				<Link to="/products">Products</Link>
			</p>
		</>
	);
};

export default Home;

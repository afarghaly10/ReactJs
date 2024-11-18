import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductsDetails = () => {
	const params = useParams();

	return (
		<div>
			<h1>Products Details Page</h1>
			<p>{params.productId}</p>
			<p>
				<Link to=".." relative="path">
					Back
				</Link>
			</p>
		</div>
	);
};

export default ProductsDetails;

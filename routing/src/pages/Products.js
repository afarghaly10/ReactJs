import React from 'react';
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: 'p1', title: 'Product 1', description: 'The first product' },
  { id: 'p2', title: 'Product 2', description: 'The second product' },
  { id: 'p3', title: 'Product 3', description: 'The third product' },
];

const Products = () => {
  return (
		<div>
			<h1>Products Page</h1>
			<ul>
				{PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
			</ul>
		</div>
	);
}

export default Products

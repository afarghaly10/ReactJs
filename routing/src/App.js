import {
	createBrowserRouter,
	RouterProvider,
	// createRoutesFromElements,
	// Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import ProductsDetails from './pages/ProductsDetails';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
    errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> }, // path: '' is the default route
			{ path: 'products', element: <Products /> },
      {path: 'products/:productId', element: <ProductsDetails />}
		],
	},
]);

// const routeDefinitions = createRoutesFromElements(
// 	<Route>
// 		<Route path="/" element={<Home />} />,
//     <Route path="/products" element={<Products />} />,
// 	</Route>
// );

// const router = createBrowserRouter(routeDefinitions);

function App() {
	return <RouterProvider router={router} />;
}

export default App;

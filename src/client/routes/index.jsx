import App from '../App';
import History from '../pages/History';
import NotFound from '../pages/NotFound';

const React = require('react');
const { json, useLoaderData, Outlet } = require('react-router-dom');

const routes = [
	{
		path: '/',
		loader() {
			return json({ message: 'Welcome to React Router!' });
		},
		element: <App />,

		ErrorBoundary() {
			return <NotFound />;
		},
	},
	{
		path: '/history',
		element: <History />,
		loader() {
			return json({ message: 'Welcome to React Router!' });
		},
		ErrorBoundary() {
			return <NotFound />;
		},
	},
	{
		path: '/examples',
		loader() {
			return json({ message: 'examples' });
		},
		// Component() {
		// 	let data = useLoaderData();
		// 	return <h1>{data.message}</h1>;
		// },
		element: (
			<>
				<h1>Example page</h1>
				<Outlet />
			</>
		),
		ErrorBoundary() {
			return <NotFound />;
		},
		children: [
			{
				path: '1',
				element: <h4>Example 1 page</h4>,
			},
			{
				path: '2',
				element: <h4>Example 2 page</h4>,
			},
		],
	},

];

export default routes;

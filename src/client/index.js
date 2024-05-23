import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import createStore from './redux/store';
import routes from './routes';
const store = createStore(window.__STATE__);
delete window.__STATE__;
let router = createBrowserRouter(routes);
const render = (Component) => {
	const rootElement = document.getElementById('root');
	if (process.env.NODE_ENV === 'production') {
		ReactDOM.hydrateRoot(
			rootElement,
			<Provider store={store}>
				<RouterProvider router={router} fallbackElement={<p>Loading... </p>}>
					<Component />
				</RouterProvider>
			</Provider>
		);
	} else {
		const root = ReactDOM.createRoot(rootElement);
		root.render(
			<Provider store={store}>
				<RouterProvider router={router} fallbackElement={<p>Loading... </p>}>
					<Component />
				</RouterProvider>
			</Provider>
		);
	}
};

render(App);

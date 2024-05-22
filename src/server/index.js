import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import {
	StaticRouterProvider,
	createStaticHandler,
	createStaticRouter,
} from 'react-router-dom/server';
import App from '../client/App';
import createStore from '../client/redux/store';
import routes from '../client/routes';
import createFetchRequest from '../client/routes/request';

const app = express();
const PORT = 3000;

app.use(express.static('build'));

let handler = createStaticHandler(routes);
app.get('*', async (req, res) => {
	const store = createStore();
	let fetchRequest = createFetchRequest(req, res);
	let context = await handler.query(fetchRequest);

	let router = createStaticRouter(handler.dataRoutes, context);
	const appString = ReactDOMServer.renderToString(
		<Provider store={store}>
			<StaticRouterProvider
				location={req.url}
				router={router}
				context={context}
			>
				<App />
			</StaticRouterProvider>
		</Provider>
	);

	const preloadedState = store.getState();
	const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React SSR + Express </title>
    </head>
    <body>
      <div id="root">${appString}</div>
    <script>
    window.__STATE__ = ${JSON.stringify(preloadedState).replace(
			/</g,
			'\\u003c'
		)}
  </script>
      <script src="client.js"></script>
    </body>
    </html>
  `;

	if (
		context instanceof Response &&
		[301, 302, 303, 307, 308].includes(context.status)
	) {
		return res.redirect(context.status, context.headers.get('Location'));
	}
	res.send(html);
});

app.listen(PORT || 3000, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

import { React } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouterProvider } from 'react-router-dom/server';
import App from '../src/client/App';
import createStore from '../src/client/redux/store';
test('renders app correctly', () => {
	const store = createStore();
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
	expect(html).toBeDefined();
});

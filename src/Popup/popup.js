import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { Store } from 'webext-redux';

const store = new Store({
	portName: 'fav_link',
});

import App from './components/App/App.js';

const unsubscribe = store.subscribe(() => {
	unsubscribe(); // make sure to only fire once
	render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	);
});

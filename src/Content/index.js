import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';

const proxyStore = new Store({
	portName: 'fav_link',
});

const anchor = document.createElement('div');
anchor.id = 'rcr-anchor';

document.body.insertBefore(anchor, document.body.childNodes[0]);

proxyStore.ready().then(() => {
	render(<Provider store={proxyStore}>{null}</Provider>, document.getElementById('rcr-anchor'));
});

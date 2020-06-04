import { wrapStore } from 'webext-redux';
import store from '../store/index.js';

wrapStore(store, {
	portName: 'fav_link',
});

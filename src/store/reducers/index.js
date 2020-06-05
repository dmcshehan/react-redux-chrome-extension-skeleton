import { combineReducers } from 'redux';
import linkReducer from './link.js';

export default combineReducers({
	link: linkReducer,
});

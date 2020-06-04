import { combineReducers } from 'redux';
import testReducer from './test.js';

export default combineReducers({
	test: testReducer,
});

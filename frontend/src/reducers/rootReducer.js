import { combineReducers } from 'redux';
import session from './sessionReducer';
import errors from './erorrsReducer/errorsReducer';

const RootReducer = combineReducers({
	session,
	errors
});
export default RootReducer;

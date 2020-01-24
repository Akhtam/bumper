import { combineReducers } from 'redux';
import session from './sessionReducer';
import errors from './erorrsReducer/errorsReducer';
import entities from './entities/entities'

const RootReducer = combineReducers({
	entities,
	session,
	errors
});
export default RootReducer;

import { combineReducers } from 'redux';
import session from './sessionReducer';
import errors from './erorrsReducer/errorsReducer';
import entities from './entities/entities';
import ui from "./ui/uiReducer";

const RootReducer = combineReducers({
	entities,
	session,
	errors,
	ui
});
export default RootReducer;

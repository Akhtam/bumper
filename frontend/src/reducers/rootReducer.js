import { combineReducers } from 'redux';
import {RECEIVE_USER_LOGOUT} from '../actions/sessionActions'
import session from './sessionReducer';
import errors from './erorrsReducer/errorsReducer';
import entities from './entities/entities';
import ui from './ui/uiReducer';


const appReducer = combineReducers({
	entities,
	session,
	errors,
	ui
});
const rootReducer = (state, action) => {
	if (action.type === RECEIVE_USER_LOGOUT) {
		state = undefined;
	}
	return appReducer(state, action);
};

export default rootReducer;

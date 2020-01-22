import { RECEIVE_USER_LOGOUT } from '../actions/sessionActions';

const initialState = {
	isAuthenticated: false,
	user: {}
};

const sessionReducer = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_USER_LOGOUT:
			return {
				isAuthenticated: false,
				user: undefined
			};

		default:
			return state;
	}
};

export default sessionReducer
import {RECEIVE_BUSINESS} from '../../actions/businessActions'



const apointmentsReducer = (state={}, action) => {
	Object.freeze(state);
	const nextState = Object.assign({}, state);
	switch (action.type) {
		case RECEIVE_BUSINESS:
			return action.apointments;
		default:
			return state;
	}
};

export default apointmentsReducer;
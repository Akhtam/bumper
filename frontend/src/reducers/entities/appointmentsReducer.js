import { RECEIVE_BUSINESS } from '../../actions/businessActions';
import {
	ACCEPT_APPOINTMENT,
	REMOVE_APPOINTMENT,
	COMPLETE_APPOINTMENT
} from '../../actions/appointmentsActions';

const apointmentsReducer = (state = {}, action) => {
	Object.freeze(state);
	const nextState = Object.assign({}, state);
	switch (action.type) {
		case RECEIVE_BUSINESS:
			return Object.assign({}, state, action.appointments);
		case ACCEPT_APPOINTMENT:
			nextState[action.appointment.vehicle._id] = action.appointment;
			return nextState;
		case  COMPLETE_APPOINTMENT:
				nextState[action.appointment.vehicle._id] = action.appointment;
			return nextState;
		case REMOVE_APPOINTMENT:
			delete nextState[action.vehicleId];

			return nextState;
		default:
			return state;
	}
};

export default apointmentsReducer;

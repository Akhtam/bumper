export const ACCEPT_APPOINTMENT = 'ACCEPT_APPOINTMENT';
export const REMOVE_APPOINTMENT = 'REMOVE_APPOINTMENT';

export const acceptAppointment = appointment => {
    appointment.confirmed = true;
	return { type: ACCEPT_APPOINTMENT, appointment };
};

export const removeAppointment = vehicleId => {

	return { type: REMOVE_APPOINTMENT, vehicleId };
};


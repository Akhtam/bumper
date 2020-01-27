export const ACCEPT_APPOINTMENT = 'ACCEPT_APPOINTMENT';

export const acceptAppointment = appointment => {
    appointment.confirmed = true;
	return { type: ACCEPT_APPOINTMENT, appointment };
};

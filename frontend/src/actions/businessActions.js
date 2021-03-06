import * as businessApiUtil from '../util/businessUtil';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';

const serviceSelector = arrServices => {
	const res = {};
	if (!arrServices) return res;
	arrServices.forEach(el => {
		if (el) {
			res[el._id] = el;
		}
	});
	return res;
};

const appointmentSelector = appointments => {
	const res = {};
	if (!appointments) return res;
	appointments.forEach(el => (res[el.vehicle._id] = el));
	return res;
};

const receiveBusiness = ({ business, services, appointments }) => {
	appointments = appointmentSelector(appointments);
	services = serviceSelector(services);
	return {
		type: RECEIVE_BUSINESS,
		business,
		appointments,
		services
	};
};

export const fetchBusiness = providerId => dispatch => {
	// debugger
	return businessApiUtil
		.fetchbusiness(providerId)
		.then(res => {
			// debugger
			dispatch(receiveBusiness(res.data))
		})
		.catch(err => console.log(err));
};

export const updateBusiness = business => dispatch => {
	return businessApiUtil
		.updateBusiness(business)
		.then(res => dispatch(receiveBusiness(res.data)));
};

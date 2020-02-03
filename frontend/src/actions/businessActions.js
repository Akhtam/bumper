import * as businessApiUtil from '../util/businessUtil';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';

const serviceSelector = arrServices => {
	const res = {};
	if (!arrServices) return res;
	arrServices.forEach(el => (res[el._id] = el));
	return res;
};

const appointmentSelector = appointments => {
	const res = {};
	if (!appointments) return res;
	appointments.forEach(el => (res[el.vehicle._id] = el));
	return res;
};

const receiveBusiness = ({ business, services, appointments }) => {
	
	return {
		type: RECEIVE_BUSINESS,
		business,
		appointments: appointmentSelector(appointments),
		services: serviceSelector(services)
	};
};

export const fetchBusiness = providerId => dispatch => {
	return businessApiUtil
		.fetchbusiness(providerId)
		.then(res => dispatch(receiveBusiness(res.data)))
		.catch(err => console.log(err));
};

export const updateBusiness = business => dispatch => {
	return businessApiUtil
		.updateBusiness(business)
		.then(res => dispatch(receiveBusiness(res.data)));
};

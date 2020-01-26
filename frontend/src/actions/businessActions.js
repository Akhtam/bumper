import * as businessApiUtil from '../util/businessUtil';

export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
const apointments = {
	1: {
		id: 1,
		startTime: '2020-02-12, 12pm',
		endTime: '2020-02-12, 5pm',
		serviceId: 12,
		confirmed: false,

		done: false
	},
	2: {
		id: 2,
		startTime: '2020-02-12, 12pm',
		endTime: '2020-02-12, 5pm',
		serviceId: 12,
		confirmed: false,

		done: false
	},
	3: {
		id: 3,
		startTime: '2020-02-12, 12pm',
		endTime: '2020-02-12, 5pm',
		serviceId: 12,
		confirmed: false,

		done: false
	}
};

const receiveBusiness = ({ business, services }) => ({
	type: RECEIVE_BUSINESS,
	business,
	services,
	apointments

});

export const fetchBusiness = providerId => dispatch => {
	return businessApiUtil
		.fetchbusiness(providerId)
		.then(res => {
			dispatch(receiveBusiness(res.data))
		}).catch(err => console.log(err));
};

export const updateBusiness = business => dispatch => {
	return businessApiUtil
		.updateBusiness(business)
		.then(res => dispatch(receiveBusiness(res.data)));
};

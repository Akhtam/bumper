import * as businessApiUtil from '../util/businessUtil';

export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';

const receiveBusiness = ({ business, services }) => ({
	type: RECEIVE_BUSINESS,
	business,
	services
});

export const fetchBusiness = providerId => dispatch => {
	return businessApiUtil
		.fetchbusiness(providerId)
		.then(res => dispatch(receiveBusiness(res.data)));
};

export const updateBusiness = business => dispatch => {
	return businessApiUtil
		.updateBusiness(business)
		.then(res => dispatch(receiveBusiness(res.data)));
};

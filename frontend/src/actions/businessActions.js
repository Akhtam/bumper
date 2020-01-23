import * as businessApiUtil from '../util/businessUtil';

export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';

const receiveBusiness = business => ({
	type: RECEIVE_BUSINESS,
	business
});

export const fetchBusiness = providerId => dispatch => {
	return businessApiUtil
		.fetchbusiness(providerId)
		.then(res => console.log(res));
};

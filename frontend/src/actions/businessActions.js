import * as businessApiUtil from '../util/businessUtil';
import { receiveCurrentUser } from './sessionActions';

export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';

const receiveBusiness = ({ business, services }) => ({
	type: RECEIVE_BUSINESS,
	business,
	services
});

export const fetchBusiness = providerId => dispatch => {
	return businessApiUtil
		.fetchbusiness(providerId)
		.then(res => dispatch(receiveCurrentUser(res.data)));
};

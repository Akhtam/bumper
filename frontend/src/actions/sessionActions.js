import * as APIUtil from '../util/sessionApiUtil';
import jwt_decode from 'jwt-decode';

export const RECEIVE_USER_LOGOUT = 'RECEIVE_USER_LOGOUT';

export const logoutUser = () => ({
	type: RECEIVE_USER_LOGOUT
});

export const receiveCurrentUser = currentUser => ({
	type: RECEIVE_CURRENT_USER,
	currentUser
});

export const receiveErrors = errors => ({
	type: RECEIVE_SESSION_ERRORS,
	errors
});



export const logout = () => dispatch => {
	// Remove the token from local storage
	localStorage.removeItem('jwtToken');
	// Remove the token from the common axios header
	APIUtil.setAuthToken(false);
	// Dispatch a logout action
	dispatch(logoutUser());
};

export const login = user => dispatch => {
	return APIUtil.login(user)
		.then(res => {
			const { token } = res.data;
			localStorage.setItem('jwtToken', token);
			APIUtil.setAuthToken(token);
			const decoded = jwt_decode(token);
			dispatch(receiveCurrentUser(decoded));
		})
		.catch(err => {
			dispatch(receiveErrors(err.response.data));
		});
};

import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, userRole, exact }) => {
	return (
		<Route
			path={path}
			exact={exact}
			render={props =>
				!loggedIn ? (
					<Component {...props} />
				) : userRole === 'Provider' ? (
					<Redirect to='/provider-dashboard' />
				) : (
					<Redirect to='/owner-dashboard' />
				)
			}
		/>
	);
};

const Protected = ({ component: Component, loggedIn, path }) => {
	return (
		<Route
			path={path}
			render={props =>
				loggedIn ? <Component {...props} /> : <Redirect to='/login' />
			}
		/>
	);
};

const mapStateToProps = state => {
	const role =  state.session.user ? state.session.user.role : '';
	return {
		loggedIn: state.session.isAuthenticated,
		userRole: role
	};
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

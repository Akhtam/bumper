import React, { Component } from 'react';
import {AuthRoute, ProtectedRoute} from '../util/routeUtil';
import LoginForm from './session/LoginForm';
import OwnerSignupForm from './session/OwnerSignupForm'
import ProviderSignupForm from './session/ProviderSignupForm';
import {Switch} from 'react-router-dom'

class App extends Component {
	render() {
		return (
			<div>

				<Switch>
					<AuthRoute
						exact
						path='/login'
						component={LoginForm}
					/>
					<AuthRoute
						exact
						path='/ownersignup'
						com
						component={OwnerSignupForm}
					/>
					<AuthRoute
						exact
						path='/providersignup'
						component={ProviderSignupForm}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;

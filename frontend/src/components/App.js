import React, { Component } from 'react';
import {AuthRoute, ProtectedRoute} from '../util/routeUtil';
import LoginForm from './session/LoginForm';
import OwnerSignupForm from './session/OwnerSignupForm'
import ProviderSignupForm from './session/ProviderSignupForm';
import Navbar from './navbar/Navbar';


import {Switch, Route} from 'react-router-dom'
import Homepage from './homepage/Homepage';

class App extends Component {
	render() {
		return (
			<div>
				<header>
					<Navbar></Navbar>
				</header>
				<Switch>
					<AuthRoute exact path='/login' component={LoginForm} />
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
					<Route path='/' component={Homepage} />
				</Switch>
			</div>
		);
	}
}

export default App;

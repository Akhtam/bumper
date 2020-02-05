import React, { Component } from 'react';
import { AuthRoute, ProtectedRoute } from '../util/routeUtil';
import LoginForm from './session/LoginForm';
import OwnerSignupForm from './session/OwnerSignupForm';
import ProviderSignupForm from './session/ProviderSignupForm';
import Navbar from './navbar/Navbar';
import {Switch, Route} from 'react-router-dom'
import Homepage from './homepage/Homepage';
import OwnerDashboard from './ownerDashboard/OwnerDashboard';
import ProviderDashboard from './provider/ProviderDashboard';
import EditBusiness from './provider/EditBusiness';
import EditService from './provider/service/EditService';

class App extends Component {
	render() {
		return (
			<div>
				<header>
					<Navbar />
				</header>
				<Modal />
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
					<ProtectedRoute
						exact
						path='/owner-dashboard'
						component={OwnerDashboard}
					/>
					<ProtectedRoute
						exact
						path='/provider-dashboard'
						component={ProviderDashboard}
					/>
					<ProtectedRoute
						exact
						path='/provider-dashboard/:businessId/edit'
						component={EditBusiness}
					/>
					<ProtectedRoute
						exact
						path='/provider-dashboard/:serviceId'
						component={EditService}
					/>
					<AuthRoute path='/' component={Homepage} />
				</Switch>
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/businessActions';
import './provider.scss'

import Service from './service/Service';
import Appointments from './appointments/Appointments';
import Notifications from './notifications/Notifications';

class ProviderDashboard extends Component {
    componentDidMount() {
        this.props.fetchBusiness(this.props.providerId)
    }
	render() {
		return (
			<div className='provider-container'>
				<div className='appointments-container'>
					<Appointments />
				</div>
				<div className='service-notification'>
					<div className='notification-container'>
						<Notifications />
					</div>
					<div className='service-container'>
						<Service />
					</div>
				</div>
			</div>
		);
	}
}

const mstp = state => ({
    providerId: state.session.user.id

});

const mdtp = dispatch => ({
	fetchBusiness: providerId => dispatch(fetchBusiness(providerId))
});

export default connect(mstp, mdtp)(ProviderDashboard);

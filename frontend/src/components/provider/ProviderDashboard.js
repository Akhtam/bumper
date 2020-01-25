import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/businessActions';
import Appointments from './appointments/Appointments';
import Notifications from './notifications/Notifications';
import Service from './service/Service';

import Modal from '../modal/modal';
import './provider.scss'

class ProviderDashboard extends Component {
	componentDidMount() {
		this.props.fetchBusiness(this.props.providerId)
	}
	handleEdit = e => {
		e.preventDefault();
		this.props.history.push(
			`provider-dashboard/${this.props.businessId}/edit`
		);
	};
	render() {

		return (
			<div className='provider-container'>
				<Modal />
				{/* <button onClick={this.handleEdit}>Edit Business</button> */}
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
	providerId: state.session.user.id,
	businessId: state.entities.business._id
});

const mdtp = dispatch => ({
	fetchBusiness: providerId => dispatch(fetchBusiness(providerId))
});

export default connect(mstp, mdtp)(ProviderDashboard);

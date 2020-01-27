import React, { Component } from 'react';
import { connect } from 'react-redux';
import { acceptAppointment } from '../../../actions/appointmentsActions';

import NotificationsItem from './NotificationsItem';

class Notifications extends Component {

	render() {
		
		const { notifications, services, acceptAppointment } = this.props;
		return (
			<div>
				<NotificationsItem
					notifications={notifications}
					services={services}
					acceptAppointment={acceptAppointment}
				/>
			</div>
		);
	}
}

const mstp = state => {
	const notifications = Object.values(state.entities.appointments).filter(
		appointment => !appointment.confirmed
	);
	return {
		services: state.entities.services,
		notifications
	};
};

const mdtp = dispatch => ({
	acceptAppointment: appointment => dispatch(acceptAppointment(appointment))
});

export default connect(mstp, mdtp)(Notifications);

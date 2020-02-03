import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	acceptAppointment,
	removeAppointment
} from '../../../actions/appointmentsActions';

import NotificationsItem from './NotificationsItem';

class Notifications extends Component {
	render() {
		const {
			notifications,
			services,
			acceptAppointment,
			removeAppointment
		} = this.props;
		
		return (
			<div>
				{notifications.length > 0 ?
				<NotificationsItem
					notifications={notifications}
					services={services}
					acceptAppointment={acceptAppointment}
					removeAppointment={removeAppointment}
				/> : null}
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
	acceptAppointment: appointment => dispatch(acceptAppointment(appointment)),
	removeAppointment: appointmentId =>
		dispatch(removeAppointment(appointmentId))
});

export default connect(mstp, mdtp)(Notifications);

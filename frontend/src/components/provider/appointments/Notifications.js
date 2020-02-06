import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	acceptAppointment,
	removeAppointment
} from '../../../actions/appointmentsActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import NotificationsItem from './NotificationsItem';
import './notification.scss'

class Notifications extends Component {
	render() {
		const {
			notifications,
			services,
			acceptAppointment,
			removeAppointment
		} = this.props;
		const notif = notifications.length < 1 ? 'notification-placeholder' : ""
		return (
			<div className={notif}>
				{notifications.length > 0 ? (
					<NotificationsItem
						notifications={notifications}
						services={services}
						acceptAppointment={acceptAppointment}
						removeAppointment={removeAppointment}
					/>
				) : (
					<div>
						<FontAwesomeIcon
							size='3x'
							icon={faBell}
						/>
						<h2>No Pending Appointments</h2>
					</div>
				)}
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

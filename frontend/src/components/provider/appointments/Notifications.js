import React, { Component } from 'react';
import { connect } from 'react-redux';

import NotificationsItem from './NotificationsItem';

class Notifications extends Component {
	render() {
		const { notifications, services } = this.props;
		return (
			<div>
				<NotificationsItem
					notifications={notifications}
					services={services}
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

export default connect(mstp)(Notifications);

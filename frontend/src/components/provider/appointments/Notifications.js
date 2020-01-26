import React, { Component } from 'react';
import { connect } from 'react-redux';

class Notifications extends Component {
	render() {
		const { notifications } = this.props;
		// console.log(services, notifications);

		return (
			<div>
				{notifications.map(notification => {
					console.log(this.props.services[0].type );
					
					return (
						<div >
							{/* <p>{notification.date}</p>
							<p>{notification.startTime}</p>
							<p>{notification.endTime}</p> */}
						</div>
					);
				})}
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

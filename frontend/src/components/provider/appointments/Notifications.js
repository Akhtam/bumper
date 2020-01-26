import React, { Component } from 'react';
import { connect } from 'react-redux';

class Notifications extends Component {
	render() {

		return (
			<div>
				<h4>Notifications</h4>
			</div>
		);
	}
}

const mstp = state => {
	const notifications = Object.values(state.entities.apointments).filter(
		apointment => !apointment.confirmed
	);
	return {
		notifications
	};
};

export default connect(mstp)(Notifications);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Completed from './Completed';
import Uncompleted from './Uncompleted';
import './appointments.scss';

class Appointments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			completed: true,
			uncompleted: false
		};
	}

	handleComplete = e => {
		e.preventDefault();
		this.setState({
			completed: !this.state.completed,
			uncompleted: !this.state.completed
		});
	};
	render() {
		return (
			<div>
				{/* <button onClick={this.handleComplete}>
					{this.state.completed ? 'Completed' : `In Process`}
				</button> */}
				{/* {this.state.uncompleted ? (
					<Completed
						completed={this.props.completed}
						services={this.props.services}
					/>
				) : (
	
				)} */}
				{/* <Uncompleted
					incompleted={this.props.incompleted}
					services={this.props.services}
				/> */}
			</div>
		);
	}
}

const mstp = state => {
	const completed = Object.values(state.entities.appointments).filter(
		appointment => appointment.done && appointment.confirmed
	);
	const incompleted = Object.values(state.entities.appointments).filter(
		appointment => !appointment.done && appointment.confirmed
	);
	return {
		completed,
		incompleted,
		services: state.entities.services
	};
};

export default connect(mstp)(Appointments);

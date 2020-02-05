import React, { Component } from 'react';
import { connect } from 'react-redux';

import Completed from './Completed';
import Uncompleted from './Uncompleted';
import './appointments.scss';
import { completeAppointment } from '../../../actions/appointmentsActions';

class Appointments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			completed: true,
			incompleted: false
		};
	}

	handleComplete = e => {
		e.preventDefault();
		const { completed, incompleted } = this.state;
		if (
			(e.target.innerHTML === 'IN PROCESS' && completed) ||
			(e.target.innerHTML === 'DONE' && incompleted)
		) {
			return;
		} else {
			this.setState({
				completed: !this.state.completed,
				incompleted: !this.state.incompleted
			});
		}
	};
	render() {
		let doneStyle = this.state.completed ? 'active' : 'inactive';
		let undoneStyle = this.state.incompleted ? 'active' : 'inactive';

		return (
			<div>
				<div className='apps-nav'>
					<div
						onClick={this.handleComplete}
						className={`${doneStyle} apps-btn`}
					>
						IN PROCESS
					</div>
					<div
						onClick={this.handleComplete}
						className={`${undoneStyle} apps-btn`}
					>
						DONE
					</div>
				</div>
				{this.state.incompleted ? (
					<Completed
						completed={this.props.completed}
						services={this.props.services}
					/>
				) : (
					<Uncompleted
						incompleted={this.props.incompleted}
						services={this.props.services}
					/>
				)}
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

// const mdtp = dispatch => ({

// })


export default connect(mstp)(Appointments);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBusiness } from '../../actions/businessActions';

const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const mstp = state => ({
	business: state.entities.business
});
const mdtp = dispath => ({
	editBusiness: business => dispath(updateBusiness(business))
});

class EditBusiness extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			location: '',
			days: [],
			startTime: '',
			endTime: ''
		};
	}

	update(field) {
		return e =>
			this.setState({
				[field]: e.currentTarget.value
			});
	}

	handleSubmit = e => {
		e.preventDefault();

		let business = {
			id: this.props.match.params.businessId,
			title: this.state.title,
			location: this.state.location,
			days: this.state.days.join(' '),
			hours: `${this.state.startTime}-${this.state.endTime}`
		};
		this.props.editBusiness(business);
	};
	handleDays = e => {
		if (e.target.checked) {
			this.setState(
				{
					days: [...this.state.days, e.target.value]
				},
				() => console.log(this.state.days)
			);
		} else {
			const newDays = this.state.days.filter(
				day => day !== e.target.value
			);
			this.setState(
				{
					days: newDays
				},
				() => console.log(this.state.days)
			);
		}
	};
	render() {
		const formatWeek = week.map((day, i) => {
			return (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						margin: '10px'
					}}
					key={i}
				>
					{day}
					<input
						type='checkbox'
						value={day}
						defaultChecked={this.props.defaultChecked}
						onChange={this.handleDays}
					/>{' '}
				</div>
			);
		});
		return (
			<div className='signup-form-container'>
				<div className='signup-form'>
					<h3>Bussiness Info</h3>
					<input
						type='title'
						value={this.state.title}
						onChange={this.update('title')}
						placeholder='Title'
					/>
					<br />
					<input
						type='location'
						value={this.state.location}
						onChange={this.update('location')}
						placeholder='Location'
					/>
					<br />
					<div className='week'>
						<div style={{ display: 'flex' }}>{formatWeek}</div>
					</div>
					<br />
					<input
						type='time'
						value={this.state.startTime}
						onChange={this.update('startTime')}
					/>
					<br />
					<input
						type='time'
						value={this.state.endTime}
						onChange={this.update('endTime')}
					/>
					<br />
					<button onClick={this.handleSubmit}>Edit</button>
				</div>
			</div>
		);
	}
}

export default connect(mstp, mdtp)(EditBusiness);

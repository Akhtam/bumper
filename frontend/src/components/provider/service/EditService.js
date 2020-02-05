import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateService, deleteService } from '../../../actions/serviceActions';
import { openModal, closeModal } from '../../../actions/modalActions';
import './service.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

const mapStateToProps = (state, ownProps) => ({
	service: state.entities.services[ownProps.match.params.serviceId],
	types: [
		'Oil change',
		'Filter replacement',
		'Fluid services',
		'Maintance inspections',
		'Check Engine Light Diagnostic'
	]

	// errors: state.errors.serviceErrors
});

const mapDispatchToProps = dispatch => ({
	processForm: formData => dispatch(updateService(formData)),
	openModal: modal => dispatch(openModal(modal)),
	closeModal: () => dispatch(closeModal()),
	deleteService: serviceId => dispatch(deleteService(serviceId))
});

class EditService extends Component {
	constructor(props) {
		super(props);
		// console.log(this.props);
		this.state = {
			type: this.props.service.type,
			price: this.props.service.price,
			description: this.props.service.description,
			businessId: this.props.businessId
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

		let service = {
			id: this.props.service._id,
			type: this.state.type,
			price: this.state.price,
			description: this.state.description,
			businessId: this.state.businessId
		};
		this.props.processForm(service);
		this.props.history.push('/');
	};

	handleDelte = serviceId => {
		this.props.deleteService(serviceId);
		this.props.history.push('/');
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit} className='EditServiceForm'>
					<div className='service-icon'>
						<FontAwesomeIcon
							color='rgba(0, 0, 0, 0.6)'
							size='6x'
							icon={faWrench}
						/>
					</div>
					<h2>Edit your Service</h2>
					<div className='PriceAndType'>
						<select
							value={this.state.type}
							onChange={this.update('type')}
						>
							<option disabled> SELECT</option>
							{this.props.types.map((type, i) => (
								<option key={i} value={type}>
									{type}
								</option>
							))}
						</select>
						<input
							type='field'
							value={this.state.price}
							onChange={this.update('price')}
							placeholder='Price enter in $29,99'
						/>
					</div>
					<input
						type='field'
						value={this.state.description}
						onChange={this.update('description')}
						placeholder='Description'
						className='inputDescriptionEdit'
					/>
					<div className='editFormButtonContainer'>
						<button
							className='editServiceButton'
							onClick={this.handleSubmit}
						>
							Edit Service
						</button>
						<button
							className='deleteServiceButton'
							onClick={() =>
								this.handleDelte(this.props.service._id)
							}
						>
							Delete
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditService);

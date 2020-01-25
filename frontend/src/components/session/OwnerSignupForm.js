import React, { Component } from 'react';

import { connect } from 'react-redux';
import { signup } from '../../actions/sessionActions';
import './login.scss'


const mapStateToProps = state => {
	return {
		errors: state.errors.session
	};
};

const mapDispatchToProps = dispatch => {
	return {
		signup: user => dispatch(signup(user))
	};
};

class OwnerSignupForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			name: '',
			password: '',
			role: 'Owner',
			errors: {}
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearedErrors = false;
	}


	update(field) {
		return e =>
			this.setState({
				[field]: e.currentTarget.value
			});
	}

	handleSubmit(e) {
		e.preventDefault();
		let user = {
			email: this.state.email,
            name: this.state.name,
            role: this.state.role,
			password: this.state.password
		};

		this.props.signup(user);
	}

	renderErrors() {
		return (
			<ul>
				{Object.keys(this.state.errors).map((error, i) => (
					<li key={`error-${i}`}>{this.state.errors[error]}</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className='container'>
				<div className='login-box'>
					<div className='top-box'>
						<form onSubmit={this.handleSubmit}>
							<div className='textbox'>
								<input
									type='text'
									value={this.state.name}
									onChange={this.update('name')}
									placeholder='Name'
								/>
							</div>
							<div className='textbox'>
								<input
									type='text'
									value={this.state.email}
									onChange={this.update('email')}
									placeholder='Email'
								/>
							</div>
							<div className='textbox'>
								<input
									type='password'
									value={this.state.password}
									onChange={this.update('password')}
									placeholder='Password'
								/>
							</div>
							<div>
								<input
									type='submit'
									value='Submit'
									className='form-button button'
								/>
							</div>
							{this.renderErrors()}
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerSignupForm);

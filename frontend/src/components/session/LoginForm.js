import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/sessionActions';
import './login.scss'
class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	updateInput(inputType) {
		return e => {
			e.preventDefault();
			this.setState({
				[inputType]: e.target.value
			});
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		const { loginUser } = this.props;
		loginUser(this.state);
	}


	render() {
		// const errs = this.props.errors.map((err, i) => {
		// 	return (
		// 		<li key={i} className='error'>
		// 			{err}
		// 		</li>
		// 	);
		// });
		return (
			<div className='container'>
				<div className='login-box'>
					<div className='top-box'>
						<div className='title'>
							<h2>Welcome</h2>
						</div>

						<form onSubmit={this.handleSubmit}>
							<div className='textbox'>
								<input
									placeholder='Email address'
									className='user-input'
									type='text'
									value={this.state.email}
									onChange={this.updateInput('email')}
								/>
							</div>
							<div className='textbox'>
								<input
									className='user-input'
									placeholder='Password'
									type='password'
									value={this.state.password}
									onChange={this.updateInput('password')}
								/>
							</div>
							<div>
								<input
									type='submit'
									className='form-button button'
									value='Login'
								/>
							</div>

							{/* <div className={errs.length ? 'errors' : ''}>
								<ul>{errs}</ul>
							</div> */}
						</form>
					</div>
				</div>
			</div>
		);
	}
}

// const mstp = state => ({
// 	errors: state.errors.sessionErrors
// });

const mapDispatchToProps = dispatch => ({
	loginUser: formUser => dispatch(login(formUser))
});

export default connect(null, mapDispatchToProps)(LoginForm);

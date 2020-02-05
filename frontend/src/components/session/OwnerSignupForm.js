import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';



import { connect } from 'react-redux';
import { signup } from '../../actions/sessionActions';
import './login.scss'


const mapStateToProps = state => {
	return {
		errors: state.errors.sessionErrors
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
			role: 'Owner'
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
				{Object.values(this.props.errors).map((error, i) => (
					<li key={`error-${i}`}>{error}</li>
				))}
			</ul>
		);
	}

	render() {
		return (
      <div className="container">
        <div className="blur"> </div>
        <div className="login-box">
          <div className="top-box">
            <div className="login-icon">
              <FontAwesomeIcon
                color="rgba(0, 0, 0, 0.6)"
                size="6x"
                icon={faCar}
              />
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="title">
                <h4>Service Driven</h4>
              </div>
              <div className="errors">{this.renderErrors()}</div>
              <div className="textbox">
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.update("name")}
                  placeholder="Name"
                />
              </div>
              <div className="textbox">
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                />
              </div>
              <div className="textbox">
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="Sign Up"
                  className="form-button button"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerSignupForm);

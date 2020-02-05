import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/sessionActions';
import './login.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
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
            <div className="title">
              <h2>Welcome</h2>
            </div>
            <div className="errors">{this.renderErrors()}</div>
            <form onSubmit={this.handleSubmit}>
              <div className="textbox">
                <input
                  placeholder="Email address"
                  className="user-input"
                  type="text"
                  value={this.state.email}
                  onChange={this.updateInput("email")}
                />
              </div>
              <div className="textbox">
                <input
                  className="user-input"
                  placeholder="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.updateInput("password")}
                />
              </div>
              <div>
                <input
                  type="submit"
                  className="form-button button"
                  value="Login"
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

const mstp = state => {
  return({
    errors: state.errors.sessionErrors
  })
};

const mapDispatchToProps = dispatch => ({
	loginUser: formUser => dispatch(login(formUser))
});

export default connect(mstp, mapDispatchToProps)(LoginForm);

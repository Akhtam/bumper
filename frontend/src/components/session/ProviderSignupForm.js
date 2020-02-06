import React, { Component } from 'react';

import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/sessionActions';
import './signup.scss';

const mapStateToProps = state => {
	return {
		errors: state.errors.sessionErrors
	};
};

const mapDispatchToProps = dispatch => {
	return {
		signup: user => dispatch(signup(user)),
		clearErrors: () => dispatch(clearErrors())
	};
};

const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

class ProviderSignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      role: "Provider",
      title: "",
      location: "",
      days: [],
      startTime: "",
      endTime: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillMount() {
	  this.props.clearErrors();
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
      password: this.state.password,
      title: this.state.title,
      location: this.state.location,
      serviceIds: [],
      days: this.state.days.join(" "),
      hours: `${this.state.startTime}-${this.state.endTime}`
    };
    this.props.signup(user);
  }

  renderErrors() {
    return (
      <ul>
        {Object.values(this.props.errors).map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    );
  }

  handleDays = e => {
    if (e.target.checked) {
      this.setState({
        days: [...this.state.days, e.target.value]
      });
    } else {
      const newDays = this.state.days.filter(day => day !== e.target.value);
      this.setState({
        days: newDays
      });
    }
  };

  render() {
    const formatWeek = week.map((day, i) => {
      return (
        <div
          className="days"
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "10px",
            justifyContent: "center",
            alignItems: "center"
          }}
          key={i}
        >
          {day}
          <input
            type="checkbox"
            value={day}
            defaultChecked={this.props.defaultChecked}
            onChange={this.handleDays}
          />{" "}
        </div>
      );
    });
    // debugger
    return (
      <div className="signup-form-container">
        <div className="blur"> </div>
        <div className="provider-login-box">
          <div className="provider-top-box">
            <h3 className="head">Signup</h3>
            <div className="errors">{this.renderErrors()}</div>
            <br />
            <input
              className="textbox"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <br />
            <input
              className="textbox"
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
              placeholder="Name"
            />
            <br />
            <input
              className="textbox"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <br />
            <h3 className="head">Business Info</h3>
            <input
              className="textbox"
              type="title"
              value={this.state.title}
              onChange={this.update("title")}
              placeholder="Title"
            />
            <br />
            <input
              className="textbox"
              type="location"
              value={this.state.location}
              onChange={this.update("location")}
              placeholder="Location"
            />
            <br />
            <div className="week">
              <div style={{ display: "flex" }}>{formatWeek}</div>
            </div>
            <br />
            <div className="form-times">
              <div className="form-time-child">
                Open:
                <input
                  type="time"
                  value={this.state.startTime}
                  onChange={this.update("startTime")}
                />
              </div>
              <div className="form-time-child">
                Close:
                <input
                  type="time"
                  value={this.state.endTime}
                  onChange={this.update("endTime")}
                />
              </div>
            </div>

            <br />

            <button className="form-button button" onClick={this.handleSubmit}>
              Create business
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProviderSignupForm);

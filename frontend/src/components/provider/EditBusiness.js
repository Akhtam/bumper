import React, { Component } from "react";
import { connect } from "react-redux";
import { updateBusiness } from "../../actions/businessActions";
import "../session/signup.scss";

const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
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
      title: "",
      location: "",
      days: [],
      startTime: "",
      endTime: ""
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
      days: this.state.days.join(" "),
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
      const newDays = this.state.days.filter(day => day !== e.target.value);
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
    return (
      <div className="edit-form-container">
        <div className="edit-blur"> </div>
        <div className="provider-login-box">
          <div className="provider-top-box">
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
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mstp, mdtp)(EditBusiness);

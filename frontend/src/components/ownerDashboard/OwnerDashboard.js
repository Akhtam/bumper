import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import "./owner.scss";

export default class OwnerDashboard extends Component {
  render() {
    return (
      <div className="owner-dash">
        <div className="tool-icon">
          <FontAwesomeIcon icon={faTools} size="2x" />
        </div>{" "}
        <p>
          The owner dashboard is currently under maintenance. Please use the
          demo login or sign up as a car service provider to explore Bumper.{" "}
        </p>
      </div>
    );
  }
}

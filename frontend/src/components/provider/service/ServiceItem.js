import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./service.scss"

export const ServiceItem = props => {
  // debugger;
  if (!props.service) {
    return null;
  } else {
    return (
      <div className="ServiceItem">
        <div>{props.service.type}</div>
        <div>{props.service.price}</div>
        <button onClick={(() => props.deleteService(props.service._id))}>
          Delete
        </button>
      </div>
    );
  }
};

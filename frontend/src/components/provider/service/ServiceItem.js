import { Link } from "react-router-dom";
import React, { Component } from "react";

export const ServiceItem = props => {
  // debugger;
  if (!props.service) {
    return null;
  } else {
    return (
      <div className="ServiceItem">
        {props.service.type}
        {props.service.price}
        <button onClick={(() => props.deleteService(props.service._id))}>
          Delete
        </button>
      </div>
    );
  }
};

import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./service.scss";

export const ServiceItem = props => {
	
	
		return (
      <div className="ServiceItem">
        <img src="https://moovingdev.fr/wp-content/uploads/2018/01/Control-Panel.png" />
        <div className="servicePrice">{props.service.price}</div>
        <div className="serviceType">
          {props.service.type}{" "}
          {props.service._id === "5e38ab65d4019e02c0894202" ? (
            ""
          ) : (
            <button
              className="ServiceButtons"
              onClick={() => props.deleteService(props.service._id)}
            >
              Delete
            </button>
          )}
        </div>
        <Link to={`/provider-dashboard/${props.service._id}`}>edit</Link>
      </div>
    );
  
};

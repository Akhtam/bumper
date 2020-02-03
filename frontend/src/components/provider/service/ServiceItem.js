import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./service.scss";

export const ServiceItem = props => {
	
  if (!props.service || props.service._id === '5e3872eb7ca596efa3352645') {
		return null;
  } else {
		return (
			<div className='ServiceItem'>
				<img src='https://moovingdev.fr/wp-content/uploads/2018/01/Control-Panel.png' />
				<div className='servicePrice'>{props.service.price}</div>
				<div className='serviceType'>
					{props.service.type}
					<button
						className='ServiceButtons'
						onClick={() => props.deleteService(props.service._id)}
					>
						Delete
					</button>
				</div>
			</div>
		);
  }
};

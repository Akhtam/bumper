import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./service.scss";

export const ServiceItem = props => {
	

		return (
			<div className='ServiceItem'>
				<img src='https://moovingdev.fr/wp-content/uploads/2018/01/Control-Panel.png' />
				<div className='servicePrice'>{props.service.price}</div>
				<div className='serviceType'>
					{props.service.type}{' '}
					{props.service._id === '5e38ab65d4019e02c0894202' ? (
						''
					) : (
						<Link
							to={`/provider-dashboard/${props.service._id}`}
							style={{ textDecoration: 'none' }}
							className='editService'
						>
							<img src='https://img.icons8.com/material/24/000000/edit--v1.png'></img>
						</Link>
					)}
				</div>
			</div>
		);
  
};

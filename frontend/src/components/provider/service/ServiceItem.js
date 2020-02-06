import { Link } from "react-router-dom";
import React from "react";
import "./service.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

export const ServiceItem = props => {
	

		return (
			<div className='ServiceItem'>
				<div className='tool-logo'>
					<FontAwesomeIcon icon={faTools} size='2x'/>
				</div>
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
							<img
								alt='edit'
								src='https://img.icons8.com/material/24/000000/edit--v1.png'
							></img>
						</Link>
					)}
				</div>
			</div>
		);
  
};

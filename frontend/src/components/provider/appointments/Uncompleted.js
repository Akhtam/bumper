import React from 'react';

const Uncompleted = ({ incompleted, services }) => {
	const incompleteAppointments = incompleted.map((appointment, i) => {
		const { make, model, year } = appointment.vehicle.attributes;
		const service = services[appointment.serviceId].type
			.split(' ')
			.map((str, j) => (
				<div className='aa-service' key={j}>
					{str}
				</div>
			));
		return (
			<div className='appointment-item' key={i}>
				<img src='https://images.vexels.com/media/users/3/154251/isolated/preview/fef0c563c39f2746c35604e969ffe3ef-bmw-car-front-view-silhouette-by-vexels.png' />
				<div className='dates'>
					<div>{appointment.startTime}</div>
					<div>{appointment.endTime}</div>
				</div>

				<div className='vehicle-info'>
					<div>
						Make: <span>{make}</span>
					</div>
					<div>
						Model: <span>{model}</span>
					</div>
					<div>
						Year: <span>{year}</span>
					</div>
				</div>
				<div className='a-service'>{service}</div>
				<div className='done-button'>DONE</div>
			</div>
		);
	});

	return <div>{incompleteAppointments}</div>;
};

export default Uncompleted;

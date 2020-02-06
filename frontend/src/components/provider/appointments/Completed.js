import React from 'react';

const Completed = ({ completed, services }) => {
	const completedAppointments = completed.map((appointment, i) => {
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
				<img
					alt='vahicle'
					src='https://images.vexels.com/media/users/3/154251/isolated/preview/fef0c563c39f2746c35604e969ffe3ef-bmw-car-front-view-silhouette-by-vexels.png'
				/>
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
				<div className='delv-button'>
					<span>DROPPED</span> <span>OFF</span>{' '}
				</div>
			</div>
		);
	});

	return <div>{completedAppointments}</div>;
};

export default Completed;

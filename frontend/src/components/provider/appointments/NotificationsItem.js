import React from 'react';
import './notificationItem.scss';

const NotificationsItem = ({ notifications, services, acceptAppointment, removeAppointment }) => {
	
	const incomingAppointments = notifications.map((notification, i) => {
		const day = notification.date ?  new Date(notification.date)
			.toDateString()
			.split(' ')
			.slice(1, 3) : ['', ''];
		return (
			<div className='notification-item' key={i}>
				<img src='https://images.vexels.com/media/users/3/154251/isolated/preview/fef0c563c39f2746c35604e969ffe3ef-bmw-car-front-view-silhouette-by-vexels.png' />
				<div className='dates'>
					<div className='date'>
						{day[0]} {day[1]}
					</div>
					<div>{notification.startTime}</div>
					<div>{notification.endTime}</div>
				</div>
				<div className='confirm-decline'>
					<div className='n-service'>{services[notification.serviceId].type}</div>

					<div className='n-buttons'>
						<span className='accept' onClick={() => acceptAppointment(notification)}>ACCEPT</span>
						<span onClick={() => removeAppointment(notification.vehicle._id)}>DECLINE</span>
					</div>
				</div>
			</div>
		);
	});

	return <div>{incomingAppointments}</div>;
};
export default NotificationsItem;

import React, { Component } from 'react';
import Service from './service/Service';
import Axios from 'axios';

export default class ProviderDashboard extends Component {
	render() {
		return (
			<div>
                
				<div className='service-container'>
					<Service />
				</div>
			</div>
		);
	}
}




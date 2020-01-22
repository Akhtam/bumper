import React from "react";
import {Link} from 'react-router-dom';
import "./Homepage.scss"

class Homepage extends React.Component {
  render() {
    return (
		<div className='homepage-parent'>
			<div className='homepage-top-presentation'>
				<span>
					<h2> If car owner or service prodiver </h2>
					<h2>- manage your services right with bumper</h2>
				</span>
				{/* {this.singupForm()} */}
				<div className='homepage-signup-buttons'>
					<button>
						<Link to={'/ownersignup'}> Sign up as Owner</Link>
					</button>
					<button>
						<Link to={'/providersignup'}> Sign up as Provider</Link>
					</button>
				</div>
			</div>
		</div>
	);
  }
}

export default Homepage;

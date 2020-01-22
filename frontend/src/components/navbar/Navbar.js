import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/sessionActions';
import { Link} from 'react-router-dom';
import './Navbar.scss';


class Navbar extends React.Component {
	logoutUser = e => {
		e.preventDefault();
		this.props.logout();
	};

	render() {
		return (
			<div className='navbar'>
				<h1>Bumper</h1>
				{this.props.loggedIn ? (
					<button onClick={this.logoutUser}>Logout</button>
				) : (
					<div className='login-button'>
						<Link to={'/login'}>Login </Link>
					</div>
				)}
			</div>
		);
	}
}
const mspt = state => ({
	loggedIn: state.session.isAuthenticated
});



export default connect(mspt, { logout })(Navbar);

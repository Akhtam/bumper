import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/sessionActions';
import { Link } from 'react-router-dom';
import './Navbar.scss';

// import navbarContainer from "./navbarContainer/navbarContainer";

class Navbar extends React.Component {
	logoutUser = e => {
		e.preventDefault();
		this.props.logout();
	};

	render() {
		return (
			<div className='navbar'>
				<h1>Bumper</h1>
				{/* {this.setLinks()} */}
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
const mapStateToProps = state => ({
	loggedIn: state.session.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);

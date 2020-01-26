import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/sessionActions";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import {dropdownFunction} from "../dropdown/dropdown";

class Navbar extends React.Component {
  logoutUser = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="navbar">
        <Link to="/" className="bumper-logosign">
          <h1>Bumper</h1>
        </Link>
        <div>
          <Link to="/" className="bumper-logosign">
            <h1 className="username">{this.props.username}</h1>
          </Link>

          {this.props.loggedIn ? (
            <li className="dropdown">
              <button onClick={() => dropdownFunction()} className="dropbtn">
                ...
              </button>
              <ul id="myDropdown" className="dropdown-content">
                <li>
                  <Link
                    to={`/provider-dashboard/${this.props.businessId}/edit`}
                  >
                    <button>Edit</button>
                  </Link>
                </li>
                <li>
                  <button onClick={this.logoutUser}>Logout</button>
                </li>
              </ul>
            </li>
          ) : (
            <div className="login-button">
              <Link to={"/login"}>Login </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mspt = state => {
  const username = state.session.isAuthenticated ? state.session.user.name : "";
  return {
    loggedIn: state.session.isAuthenticated,
	username,
	businessId: state.entities.business._id
  };
};

export default connect(mspt, { logout })(Navbar);

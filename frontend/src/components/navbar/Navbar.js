import React from "react";
import { connect } from "react-redux";
import { logout, login } from "../../actions/sessionActions";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { dropdownFunction } from "../dropdown/dropdown";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin() {
    const user = {
      email: "test100@mail.com",
      password: "123456"
    };
    this.setState(user);
    this.loginUser(user);
  }

  loginUser = user => {
    this.props.login(user);
  };

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
                {this.props.role === "Provider" ? (
                  <li>
                    <Link
                      to={`/provider-dashboard/${this.props.businessId}/edit`}
                    >
                      <button>Edit</button>
                    </Link>
                  </li>
                ) : null}

                <li>
                  <button onClick={this.logoutUser}>Logout</button>
                </li>
              </ul>
            </li>
          ) : (
            <div className="login-buttons">
              <div className="login-button">
                <Link to={"/login"}>Login </Link>
              </div>
              <button className="login-button" onClick={this.demoLogin}>
                Demo Login{" "}
              </button>
            </div>
          )}
        </div>
      </div>
    );
    
  }
  
}

const mspt = state => {
  const username = state.session.isAuthenticated ? state.session.user.name : "";
  const role = state.session.isAuthenticated ? state.session.user.role : "";
  return {
    loggedIn: state.session.isAuthenticated,
    username,
    businessId: state.entities.business._id,
    role
  };
};

export default connect(mspt, { logout, login })(Navbar);

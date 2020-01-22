import React from "react";
import { Link } from "react-router-dom";
// import navbarContainer from "./navbarContainer/navbarContainer";

import "./Navbar.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.setLinks = this.setLinks.bind(this);
  }


  // check what ro show in navbar pending if user if logged in or not

  setLinks(){
    if (!this.setLinks){
        return (
            <button> Logout </button>
        )
    } else {
        return (
          <div>
            {/* <Link to={}> Login </Link>
                <Link> Signup </Link> */}
            <button className="login-button">Login</button>
          </div>
        );
    }  
  }


  render() {
    return (
      <div className="navbar">
        <h1>Bumper</h1>
        {this.setLinks()}
      </div>
    );
  }
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.scss";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage-parent" className="top-panel">
        {" "}
        {/* className="top-panel" */}
        <div className="homepage-top-presentation">
          <span>
            <h2> Car service was never that easy </h2>
            <h3> Do it right, do it with Bumper</h3>
          </span>
          {/* {this.singupForm()} */}
          <div className="homepage-signup-buttons">
            <button>
              <Link to={"/ownersignup"} className="sign-Link">
                {" "}
                Sign up as Owner
              </Link>
            </button>
            <button>
              <Link to={"/providersignup"} className="sign-Link">
                {" "}
                Sign up as Provider
              </Link>
            </button>
            <h3 className="homepageBody">How Bumper works</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;

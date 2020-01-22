import React from "react";
import "./Homepage.scss"

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage-parent">
        <div className="homepage-top-presentation">
          <span>
            <h2> If car owner or service prodiver </h2>
            <h2>- manage your services right with bumper</h2>
          </span>
          {/* {this.singupForm()} */}
          <div className="homepage-signup-buttons">
            <button>Sign up as owner</button>
            <button>Sign up as provider</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;

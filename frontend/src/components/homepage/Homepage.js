import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.scss";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage-parent">
        {" "}
        <div className="homepage-top-presentation">
          <span>
            <h2> Car service was never that easy </h2>
            <h3> Do it right, do it with Bumper</h3>
          </span>
          {/* {this.singupForm()} */}
          <div className="homepage-signup-buttons">
            <Link to={"/ownersignup"} className="sign-Link">
              {" "}
              <button>Sign up as Owner</button>
            </Link>

            <Link to={"/providersignup"} className="sign-Link">
              {" "}
              <button>Sign up as Provider</button>
            </Link>
          </div>
          <footer>
            <p>
              <div className="about">
                <div className="developer">
                  <span>Margaret</span>
                  <a
                    id="linkedIn"
                    href="https://www.linkedin.com/in/margaret-cavenagh-93589846/"
                    target="_blank"
                  >
                    <img src="https://img.icons8.com/color/48/000000/linkedin.png"></img>
                  </a>
                  <a href="https://github.com/itsmargaret" target="_blank">
                    <img src="https://img.icons8.com/nolan/64/github.png" />
                  </a>
                </div>

                <div className="developer">
                  <span>Akhtam</span>
                  <a
                    id="linkedIn"
                    href="https://www.linkedin.com/in/akhtam-ismatov/"
                    target="_blank"
                  >
                    <img src="https://img.icons8.com/color/48/000000/linkedin.png"></img>
                  </a>
                  <a href="https://github.com/Akhtam" target="_blank">
                    <img src="https://img.icons8.com/nolan/64/github.png" />
                  </a>
                </div>
                <div className="developer">
                  <span>Jan</span>
                  <a
                    href="https://www.linkedin.com/in/jan-philipp-viefhues-b68885140/"
                    target="_blank"
                  >
                    <img src="https://img.icons8.com/color/48/000000/linkedin.png"></img>
                  </a>
                  <a href="https://github.com/JanViefhues/" target="_blank">
                    <img src="https://img.icons8.com/nolan/64/github.png" />
                  </a>
                </div>
              </div>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Homepage;

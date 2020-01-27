import React, { Component } from "react";
import "./service.scss";
import "./serviceForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";

export default class ServiceForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.service;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.types = this.props.types;
  }

  handleUpdate(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  handleSubmit(e) {
    e.preventDefault(e);
    this.props.processForm(this.state).then(() => this.props.closeModal());
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {Object.keys(this.props.errors).map((error, i) => (
  //         <li key={`error-${i}`}>{error}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    // debugger;
    return (
      <div className="ServiceForm">
        <div className="service-icon">
          <FontAwesomeIcon
            color="rgba(0, 0, 0, 0.6)"
            size="6x"
            icon={faWrench}
          />
        </div>
        <h2>Create your Service</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="selectTyeAndPrice">
            <div>
              {/* <label>Select service type</label> */}
              <select
                value={this.state.type}
                onChange={this.handleUpdate("type")}
              >
                <option disabled> SELECT</option>
                {this.types.map((type, i) => (
                  <option key={i} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input
                type="field"
                value={this.state.price}
                onChange={this.handleUpdate("price")}
                placeholder="Price enter in $29,99"
              />
            </div>
          </div>
          <div>
            <input
              type="field"
              value={this.state.description}
              onChange={this.handleUpdate("description")}
              placeholder="Description"
              className="inputDescription"
            />
          </div>
        </form>
        <button className="createNewService-button" onClick={this.handleSubmit}>
          Create Service
        </button>
        {/* {this.renderErrors()} */}
      </div>
    );
  }
}

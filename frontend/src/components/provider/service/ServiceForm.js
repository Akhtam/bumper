import React, { Component } from "react";





export default class ServiceForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.service
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <select value={this.state.type} onChange={this.handleUpdate("type")}>
            <option disabled> SELECT</option>
            {this.types.map((type, i) => (
              <option key={i} value={type} >
                {type}
              </option>
            ))}
          </select>

          <input
            type="field"
            value={this.state.price}
            onChange={this.handleUpdate("price")}
            placeholder="price enter in $29,99"
          />
          <input
            type="field"
            value={this.state.description}
            onChange={this.handleUpdate("description")}
            placeholder="Description"
          />
        </form>
        <button onClick={this.handleSubmit}>Create Service</button>
        {/* {this.renderErrors()} */}
      </div>
    );
  }
}

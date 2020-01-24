import React, { Component } from "react";

export default class ServiceForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.service;
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleUpdate(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  handleSubmit(e) {
    e.preventDefault(e);
    let formData = {
      type: this.state.type,
      price: this.state.price,
      description: this.state.description
    };
    this.props.processForm(formData).then(() => this.props.closeModal());
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {Object.keys(this.props.errors).map((error, i) => (
  //         <li key={`error-${i}`}>{this.state.errors[error]}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="field"
            value={this.state.type}
            onChange={this.handleUpdate("type")}
            placeholder="type"
          />
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

import React, { Component } from "react";
import { connect } from "react-redux";
import { updateService } from "../../../actions/serviceActions";
import { openModal, closeModal } from "../../../actions/modalActions";
import './EditServiceForm.scss'


const mapStateToProps = (state, ownProps) => ({
    
    service: state.entities.services[ownProps.match.params.serviceId],


  types: [
    "Oil change",
    "Filter replacement",
    "Fluid services",
    "Maintance inspections",
    "Check Engine Light Diagnostic"
  ]

  // errors: state.errors.serviceErrors
});

const mapDispatchToProps = dispatch => ({
  processForm: formData => dispatch(updateService(formData)),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

class EditService extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      type: this.props.service.type,
      price: this.props.service.price,
      description: this.props.service.description,
      businessId: this.props.businessId
    };
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit = e => {
    e.preventDefault();

    let service = {
      id: this.props.service._id,
      type: this.state.type,
      price: this.state.price,
      description: this.state.description,
      businessId: this.state.businessId
    };
    this.props.processForm(service);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="EditServiceForm">
          <div>
            <select value={this.state.type} onChange={this.update("type")}>
              <option disabled> SELECT</option>
              {this.props.types.map((type, i) => (
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
              onChange={this.update("price")}
              placeholder="Price enter in $29,99"
            />
            <div>
              <input
                type="field"
                value={this.state.description}
                onChange={this.update("description")}
                placeholder="Description"
                className="inputDescriptionEdit"
              />
            </div>
          </div>
        </form>
        <button className="editService-button" onClick={this.handleSubmit}>
            Edit Service
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditService);

import React, { Component } from "react";
import { connect } from "react-redux";
import { openModal } from "../../../actions/modalActions";
import { ServiceItem } from "./ServiceItem";
// import ServiceItem  from "./ServiceItem";
import './service.scss'



class Service extends Component {
  render() {
    return (
      <div>
        <div className="YourServices-header">
          <div className="YourServices">Your Services</div>
          <button
            onClick={() => this.props.openModal("create", null)}
            className="createNewService-button"
          >
           Add Service
          </button>
        </div>

        <div className="YourServices-body">
          {this.props.services.map((service, i) => (
            <ServiceItem
              service={service}
              key={service._id}
            />
          ))}
        </div>
        
      </div>
    );
  }
}

const mstp = state => ({
  services: Object.values(state.entities.services)
});
const mapDispatchToProps = dispatch => ({

  openModal: modal => dispatch(openModal(modal)),
  // deleteService: serviceId => dispatch(deleteService(serviceId)),

});

export default connect(mstp, mapDispatchToProps)(Service);

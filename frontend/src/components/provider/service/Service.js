import React, { Component } from "react";
import { connect } from "react-redux";
import { openModal } from "../../../actions/modalActions";
import {deleteService} from "../../../actions/serviceActions"
import { ServiceItem } from "./ServiceItem";
// import ServiceItem  from "./ServiceItem";
import './service.scss'
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";



class Service extends Component {
  constructor(props){
    super(props)
    this.deleteService= this.props.deleteService 
  }


  render() {
    return (
      <div>
        <div className="YourServices-header">
          <h2 className="YourServices">Your Services</h2>
          <button
            onClick={() => this.props.openModal("create")}
            className="createNewService-button"
          >
            New service
          </button>
        </div>

        <div className="YourServices-body">
          {this.props.services.map((service, i) => (
            <ServiceItem
              service={service}
              key={service._id}
              deleteService={this.deleteService}
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
  deleteService: serviceId => dispatch(deleteService(serviceId)),
});

export default connect(mstp, mapDispatchToProps)(Service);

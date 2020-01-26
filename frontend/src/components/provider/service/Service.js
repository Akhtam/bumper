import React, { Component } from "react";
import { connect } from "react-redux";
import { openModal } from "../../../actions/modalActions";
import {deleteService} from "../../../actions/serviceActions"
import { ServiceItem } from "./ServiceItem";
// import ServiceItem  from "./ServiceItem";


class Service extends Component {
  constructor(props){
    super(props)
    this.deleteService= this.props.deleteService 
    
  }

  render() {
    // debugger;
    return (
      <div>
        <button onClick={() => this.props.openModal("create")}>Create</button>
        <div>
          {this.props.services.map((service) => (
            <ServiceItem service={service} key={service._id} deleteService={this.deleteService} />
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
  deleteService: serviceId => dispatch(deleteService(serviceId))
});

export default connect(mstp, mapDispatchToProps)(Service);

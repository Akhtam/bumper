import React, { Component } from "react";
import { connect } from "react-redux";
import { openModal } from "../../../actions/modalActions";
import { ServiceItem } from "./ServiceItem";
// import ServiceItem  from "./ServiceItem";
import './service.scss'



class Service extends Component {
  constructor(props){
    super(props)

  }


  render() {
    return (
      <div>
        <div className="YourServices-header">
          <h2 className="YourServices">Your Services</h2>
          <button
            onClick={() => this.props.openModal("create", null)}
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
  openModal: (modal, id) => dispatch(openModal(modal, id))
});

export default connect(mstp, mapDispatchToProps)(Service);

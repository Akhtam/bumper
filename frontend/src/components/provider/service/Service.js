import React, { Component } from "react";
import { connect } from "react-redux";
import { openModal } from "../../../actions/modalActions";
import ServiceItem from "./ServiceItem";

class Service extends Component {

  render() {
    // debugger;
    return (
      <div>
        <button onClick={() => this.props.openModal("create")}>Create</button>
        <div>
          {this.props.services.map( (service, i )=>
            <ServiceItem service={service} key={i} />
          )}
        </div>
      </div>
    );
  }
}

const mstp = state => ({
  services: Object.values(state.entities.services)
});
const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mstp, mapDispatchToProps)(Service);

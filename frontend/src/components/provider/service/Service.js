import React, { Component } from "react";
import { connect } from "react-redux";
import { openModal } from "../../../actions/modalActions";

class Service extends Component {
  render() {
    return (
      <div>

        <button onClick={() => this.props.openModal("create")}>Create</button>
      </div>
    );
  }
}

const mstp = state => ({
  services: Object.values(state.entities.services)
})
const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mstp, mapDispatchToProps)(Service);

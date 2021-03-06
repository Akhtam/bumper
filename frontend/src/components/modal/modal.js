import React from "react";
import { closeModal } from "../../actions/modalActions";
import { connect } from "react-redux";
import ServiceFormContainer from "../provider/service/ServiceFormContainer";
import Confirm from "../provider/Confirm";
import "./modal.scss";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.modal || modal) {
    case "create":
      component = <ServiceFormContainer />;
      break;
    case "confirm":
      component = <Confirm/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

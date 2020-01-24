import React from "react";
import { connect } from "react-redux";
import { createNewService } from "../../../actions/serviceActions";
import ServiceForm from "./ServiceForm";
import {openModal, closeModal} from '../../../actions/modalActions';


const mapStateToProps = (state) => ({
    service: {
        type: "",
        price: "",
        description: ""
    },
    fromType: "create"
    // errors: state.errors.services
})


const mapDispatchToProps = dispatch => ({
  processForm: formData => dispatch(createNewService(formData)),
  openModal: modal => dispatch(openModal(modal))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServiceForm)
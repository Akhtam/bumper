import { connect } from 'react-redux';
import { createNewService, deleteService } from '../../../actions/serviceActions';
import ServiceForm from './ServiceForm';
import { openModal, closeModal } from '../../../actions/modalActions';



const mapStateToProps = state => ({
  service: {
    type: "SELECT",
    price: "",
    description: "",
    businessId: state.entities.business._id
  },
  fromType: "create",
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
	processForm: formData => dispatch(createNewService(formData)),
	openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceForm);

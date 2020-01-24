import { connect } from 'react-redux';
import { createNewService } from '../../../actions/serviceActions';
import ServiceForm from './ServiceForm';
import { openModal, closeModal } from '../../../actions/modalActions';

const mapStateToProps = state => ({
	// service: {
	// 	type: '',
	// 	price: '',
	// 	description: '',
	// 	businessId: state.entities.business.businessId
	// },
	fromType: 'create'
	// errors: state.errors.service
});

const mapDispatchToProps = dispatch => ({
	processForm: formData => dispatch(createNewService(formData)),
	openModal: modal => dispatch(openModal(modal)),
	closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceForm);

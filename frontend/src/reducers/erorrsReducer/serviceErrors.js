import {
  RECEIVE_SERVICE_ERRORS,
  CLEAR_SERVICE_ERRORS
} from "../../actions/serviceActions";
import { OPEN_MODAL, CLOSE_MODAL } from "../../actions/modalActions";

const _nullErrors = [];

const ServiceErrors = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SERVICE_ERRORS:
      return action.errors;
    case CLEAR_SERVICE_ERRORS: 
      return _nullErrors;
    default:
      return state;
  }
};

export default ServiceErrors;

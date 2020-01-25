import {
  RECEIVE_SERVICE_ERRORS

} from "../../actions/serviceActions";

const _nullErrors = [];

const ServiceErrors = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SERVICE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default ServiceErrors;

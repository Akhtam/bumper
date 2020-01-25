import {
  RECEIVE_SESSION_ERRORS

} from "../../actions/sessionActions";

const _nullErrors = [];

const SessionErrors = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default SessionErrors;

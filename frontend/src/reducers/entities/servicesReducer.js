import { RECEIVE_SERVICE } from "../../actions/serviceActions";
import { RECEIVE_BUSINESS } from "../../actions/businessActions";

const servicesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SERVICE:
      return action.service;
    case RECEIVE_BUSINESS:
      return Object.assign({}, state, action.services);
    default:
      return state;
  }
};

export default servicesReducer;

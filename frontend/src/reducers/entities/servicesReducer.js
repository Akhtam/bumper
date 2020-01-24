import { RECEIVE_SERVICE } from "../../actions/serviceActions";
import { RECEIVE_BUSINESS } from "../../actions/businessActions";

const servicesReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_SERVICE:
	  nextState[action.service._id] =  action.service;
	  return nextState
    case RECEIVE_BUSINESS:
      return Object.assign({}, state, action.services);
    default:
      return state;
  }
};

export default servicesReducer;

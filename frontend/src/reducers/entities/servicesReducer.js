import {
  // RECEIVE_BUSINESS_SERVICES,
  RECEIVE_SERVICE
} from "../../actions/serviceActions";

const servicesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SERVICE:
      newState[action.service.id] = action.service;
      return newState;
    default:
      return state;
  }
};

export default servicesReducer;

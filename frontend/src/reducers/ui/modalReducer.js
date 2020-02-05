import { OPEN_MODAL, CLOSE_MODAL } from "../../actions/modalActions";

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      if (action.id) {
        return {modal: action.modal, id: action.id}
      } else {
        return action.modal;
      }
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}
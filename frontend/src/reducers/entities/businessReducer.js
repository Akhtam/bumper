import { RECEIVE_BUSINESS } from '../../actions/businessActions';

const initialState = {}

const businessReducer = (state=initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BUSINESS:
            return Object.assign({}, state, action.business)
        default:
            return state;
    }
}
export default businessReducer
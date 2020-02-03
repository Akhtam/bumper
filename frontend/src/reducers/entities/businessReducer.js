import { RECEIVE_BUSINESS } from '../../actions/businessActions';


const businessReducer = (state={}, action) => {
    
    Object.freeze(state);
    // console.log(action.type);
    
    switch (action.type) {
		case RECEIVE_BUSINESS:
			return Object.assign({}, state, action.business);
		default:
			return state;
	}
}
export default businessReducer
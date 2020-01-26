import { combineReducers } from 'redux';
import servicesReducer from './servicesReducer';
import businessReducer from './businessReducer';


export default combineReducers({
    business: businessReducer,
    services: servicesReducer
});

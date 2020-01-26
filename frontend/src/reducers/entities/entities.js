import { combineReducers } from 'redux';
import servicesReducer from './servicesReducer';
import businessReducer from './businessReducer';
import apointmentsReducer from './apointmentsReducer';


export default combineReducers({
    business: businessReducer,
    services: servicesReducer,
    apointments: apointmentsReducer
});

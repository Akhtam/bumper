import { combineReducers } from 'redux';
import servicesReducer from './servicesReducer';
import businessReducer from './businessReducer';
import appointmentsReducer from './appointmentsReducer';


export default combineReducers({
    business: businessReducer,
    services: servicesReducer,
    appointments: appointmentsReducer
});

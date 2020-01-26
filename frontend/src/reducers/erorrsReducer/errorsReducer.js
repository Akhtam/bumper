import { combineReducers } from 'redux';
import sessionErrors from './sessionErrors';
import serviceErrors from './serviceErrors';

export default combineReducers({
  sessionErrors,
  serviceErrors
});

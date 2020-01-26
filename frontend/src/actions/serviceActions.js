import { createService } from "../util/serviceUtil";


export const RECEIVE_SERVICE = "RECEIVE_SERVICE";
export const RECEIVE_SERVICE_ERRORS = "RECEIVE_SERVICE_ERRORS";


export const receiveServiceErrors = errors => ({
  type: RECEIVE_SERVICE_ERRORS,
  errors
});

export const receiveService = service => ({
  type: RECEIVE_SERVICE,
  service
});


export const createNewService = data => dispatch => {

  return createService(data)
    .then(service => {
      return dispatch(receiveService(service.data))
    })
    // .catch(err => dispatch(receiveServiceErrors(err)));
}



import { createService } from "../util/serviceUtil";

// export const RECEIVE_BUSINESS_SERVICES = "RECEIVE_BUSINESS_SERVICES";

export const RECEIVE_SERVICE = "RECEIVE_SERVICE";
export const RECEIVE_SERVICE_ERRORS = "RECEIVE_SERVICE_ERRORS";

// export const receiveBusinessServices = services => ({
//     type: RECEIVE_BUSINESS_SERVICES,
//     services
// })
export const receiveServiceErrors = errors => ({
  type: RECEIVE_SERVICE_ERRORS,
  errors
});

export const receiveService = service => ({
  type: RECEIVE_SERVICE,
  service
});


export const createNewService = data => dispatch =>
  createService(data)
    .then(service => dispatch(receiveService(service.data)))
    .catch(err => dispatch(receiveServiceErrors(err.response.data)));



import {
  createService,
  deleteServiceUtil,
  updateServiceUtil
} from "../util/serviceUtil";

export const RECEIVE_SERVICE = "RECEIVE_SERVICE";
export const RECEIVE_SERVICE_ERRORS = "RECEIVE_SERVICE_ERRORS";
export const CLEAR_SERVICE_ERRORS = "CLEAR_SERVICE_ERRORS";
export const REMOVE_SERVICE = "REMOVE_SERVICE ";

export const receiveServiceErrors = errors => ({
  type: RECEIVE_SERVICE_ERRORS,
  errors
});

export const clearServiceErrors = () => ({
  type: CLEAR_SERVICE_ERRORS
});

export const receiveService = service => ({
  type: RECEIVE_SERVICE,
  service
});

export const removeService = serviceId => ({
  type: REMOVE_SERVICE,
  serviceId
});

export const createNewService = data => dispatch => {
  return createService(data)
    .then(service => {
      return dispatch(receiveService(service.data));
    })
    .catch(err => {
      return dispatch(receiveServiceErrors(err.response.data));
    });
};

export const deleteService = serviceId => dispatch => {
  return deleteServiceUtil(serviceId).then(() => {
    return dispatch(removeService(serviceId));
  });
};

export const updateService = service => dispatch => {
  return updateServiceUtil(service).then(service => {
    return dispatch(receiveService(service.data));
  });
};

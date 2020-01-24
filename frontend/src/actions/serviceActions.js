import {createService} from "../util/serviceUtil";

// export const RECEIVE_BUSINESS_SERVICES = "RECEIVE_BUSINESS_SERVICES";

export const RECEIVE_SERVICE = "RECEIVE_SERVICE";

// export const receiveBusinessServices = services => ({
//     type: RECEIVE_BUSINESS_SERVICES,
//     services
// })



export const receiveService = service => ({
    type: RECEIVE_SERVICE,
    service
});

export const createNewService = (data) => dispatch =>
    createService(data)
        .then(service => dispatch(receiveService(service)))
        .catch(err => console.log(err))


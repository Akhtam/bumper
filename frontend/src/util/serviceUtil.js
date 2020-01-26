import axios from "axios";


export const createService = (data) => {
    return axios.post("/api/services/create", data)
}

export const deleteServiceUtil = (serviceId) => {
    return axios.delete(`api/services/delete/${serviceId}`);
}



import axios from "axios";


export const createService = (data) => {
    return axios.post("/api/services/create", data)
}

export const deleteServiceUtil = (serviceId) => {
    return axios.delete(`api/services/delete/${serviceId}`);
}

export const updateServiceUtil = service => {
	return axios.put(`api/services/edit/${service.id}`, service);
};


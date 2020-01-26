import axios from "axios";


export const createService = (data) => {
    return axios.post("/api/services/create", data)
}

// export const deleteService = (serivce) => {
//     return axios.delete(`api/delete/${service.id}`);
// }

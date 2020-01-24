import axios from "axios";


export const createService = (data) => {
    return axios.post("/api/services/create", data)
}



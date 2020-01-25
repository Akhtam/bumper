import axios from 'axios';


export const fetchbusiness = providerId => {
    return axios.get(`/api/businesses/${providerId}`);
}

export const updateBusiness = business => {
    debugger
    return axios.put(`api/businesses/edit/${business.id}`, business)
}
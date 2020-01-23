import axios from 'axios';


export const fetchbusiness = providerId => {
    return axios.get(`/api/businesses/${providerId}`);
}

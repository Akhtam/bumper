import axios from "axios";

export const deleteUserUtil = id => {
  return axios.delete(`/api/users/delete/${id}`);
};

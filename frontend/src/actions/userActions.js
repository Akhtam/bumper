import { deleteUserUtil } from "../util/userUtil";

export const REMOVE_USER = "REMOVE_USER";

export const removeUser = id => ({
  type: REMOVE_USER,
  id
});

export const deleteUser = id => dispatch => {
  return deleteUserUtil(id).then(() => {
    return dispatch(removeUser(id));
  });
};

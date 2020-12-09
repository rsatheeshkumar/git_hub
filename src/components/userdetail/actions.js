import { getMethod } from "../../utils/api";

import { GET_USERS_DETAIL } from "./constants";

export const getDetail = (login) => {
  // console.log("From action get user", login);

  return async (dispatch) => {
    try {
      const data = await getMethod(`/users/${login}`, null);
      // console.log("data from getDetail", data.data);
      return dispatch({
        type: GET_USERS_DETAIL,
        payload: data.data,
      });
    } catch (error) {
      console.log("userdetails error ", error);
    }
  };
};

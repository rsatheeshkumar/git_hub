import { getMethod } from "../../utils/api";

import { SEARCH_USERS } from "./constants";

export const getSearchUsers = () => {
  return async (dispatch) => {
    try {
      const data = await getMethod("/users/search", null);
      dispatch({
        type: SEARCH_USERS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

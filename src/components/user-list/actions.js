import { getMethod } from "../../utils/api";
import { GET_USERS } from "./constants";

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const data = await getMethod("/users", null);

      dispatch({
        type: GET_USERS,
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

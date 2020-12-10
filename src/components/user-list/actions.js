import { getMethod } from "../../utils/api";
import { GET_USERS, LOADING, ERROR_AND_LOADING } from "./constants";

export const getUsers = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING, payload: true });
      const data = await getMethod("/users", null);
      dispatch({ type: GET_USERS, payload: data.data });
    } catch {
      dispatch({ type: ERROR_AND_LOADING });
    }
  };
};

import { getMethod } from "../../../utils/api";
import { GET_REPO } from "../constants";

export const getRepo = (login) => {
  return async (dispatch) => {
    try {
      const data = await getMethod(`/users/${login}/repos`, null);
      // console.log(data);
      dispatch({ type: GET_REPO, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };
};

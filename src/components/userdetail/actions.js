import { getMethod } from "../../utils/api";

import { GET_USERS_DETAIL, LOADING, ERROR } from "./constants";

export const getDetail = (login) => {
  // console.log("From action get user", login);

  return async (dispatch) => {
    try {
      dispatch({ type: LOADING, payload: true });
      const data = await getMethod(`/users/${login}`, null);
      dispatch({ type: GET_USERS_DETAIL, payload: data.data });
    } catch {
      dispatch({ type: ERROR, payload: true });
    }
  };
};

// export const getMethod = (path, config) => {
//   return axios.get(path, config);
// };

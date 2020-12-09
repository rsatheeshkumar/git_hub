import { GET_USERS } from "./constants";

const INITIAL_STATE = {
  // loading: false,
  // error: false,
  users: [],
  getDetail: [],
  // page: 1,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

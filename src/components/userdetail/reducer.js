import { GET_USERS_DETAIL } from "./constants";

const INITIAL_STATE = {
  userDetail: {},
};

export const detailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS_DETAIL:
      return {
        ...state,
        userDetail: action.payload,
      };
    default:
      return state;
  }
};

import { GET_USERS_DETAIL, LOADING, ERROR } from "./constants";

const INITIAL_STATE = {
  loading: false,
  error: false,
  userDetail: {},
};

export const detailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_USERS_DETAIL:
      return {
        ...state,
        loading: false,
        error: false,
        userDetail: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

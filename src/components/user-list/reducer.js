import { GET_USERS, LOADING, ERROR_AND_LOADING } from "./constants";

const INITIAL_STATE = {
  loading: false,
  error: false,
  users: [],
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        error: false,
        loading: false,
        users: action.payload,
      };
    case ERROR_AND_LOADING:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};

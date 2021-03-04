import { SEARCH_USERS } from "./constants";

const INITIAL_STATE = {
  searchUsers: [],
};

export const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        searchUsers: action.payload,
      };

    default:
      return state;
  }
};

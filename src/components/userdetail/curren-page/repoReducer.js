import { GET_REPO } from "../constants";

const INITIAL_STATE = {
  userRepo: [],
};

export const repoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_REPO:
      return {
        ...state,
        userRepo: action.payload,
      };

    default:
      return state;
  }
};

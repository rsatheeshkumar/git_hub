import { combineReducers } from "redux";
import { userReducer } from "../components/user-list/reducer";
import { detailReducer } from "../components/userdetail/reducer";

export const rootReducer = combineReducers({
  userReducer,
  detailReducer,
});

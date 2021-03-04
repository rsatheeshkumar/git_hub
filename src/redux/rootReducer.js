import { combineReducers } from "redux";
import { userReducer } from "../components/user-list/reducer";
import { detailReducer } from "../components/userdetail/reducer";
import { repoReducer } from "../components/userdetail/curren-page/repoReducer";
import { searchReducer } from "../components/search/searchReducer";

export const rootReducer = combineReducers({
  userReducer,
  detailReducer,
  repoReducer,
  searchReducer,
});

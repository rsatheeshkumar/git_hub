import { applyMiddleware, createStore } from "redux";
// import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// const middlewareList = [logger, thunk];
const middlewareList = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewareList))
);

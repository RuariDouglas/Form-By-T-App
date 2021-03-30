// Connected Router
import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import cjsReducer from "./cjsReducer";

const allReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    cjs: cjsReducer,
  });

export default allReducers;

// REDUX
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers/index";
// CONNECTED ROUTER
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  allReducers(history),
  composeEnhancer(applyMiddleware(routerMiddleware(history), thunk))
);

export default store;

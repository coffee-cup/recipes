import {
  CallHistoryMethodAction,
  connectRouter,
  routerMiddleware,
  RouterState,
} from "connected-react-router";
import { createBrowserHistory, History } from "history";
import * as _ from "lodash";
import {
  applyMiddleware,
  combineReducers,
  createStore,
  DeepPartial,
} from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import {
  Action as AppAction,
  reducer as AppReducer,
  State as AppState,
} from "./app";

export interface State {
  app: AppState;
  router: RouterState;
}

export type Action = CallHistoryMethodAction | AppAction;

export const history = createBrowserHistory();

export const createRootReducer = (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
    app: AppReducer,
  });

export default (isProduction = true, initialState?: DeepPartial<State>) => {
  const rootReducer = createRootReducer(history);

  const middleware = [thunkMiddleware, routerMiddleware(history)];
  if (!isProduction) {
    middleware.unshift(createLogger());
  }

  if (initialState) {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middleware),
    );
  } else {
    return createStore(rootReducer, applyMiddleware(...middleware));
  }
};

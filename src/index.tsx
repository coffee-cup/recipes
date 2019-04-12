import * as React from "react";
import * as ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./redux";
import { Provider } from "react-redux";
import App from "./App";

import "./index.scss";

const isProduction = process.env.NODE_ENV === "production";
const store = configureStore(isProduction);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root"),
);

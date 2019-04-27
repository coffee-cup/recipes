import { ConnectedRouter } from "connected-react-router";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore, { history } from "./redux";

import "./index.scss";

const isProduction = process.env.NODE_ENV === "production";
const store = configureStore(isProduction);

const render = () => {
  const App = require("./App").default;
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root"),
  );
};

/* if (module.hot) { */
/* module.hot.accept("./App", render); */
/* } */

render();

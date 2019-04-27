import firebase from "firebase/app";
import "firebase/firestore";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.scss";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
};

firebase.initializeApp(firebaseConfig);

const render = () => {
  const App = require("./App").default;
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById("root"),
  );
};

/* if (module.hot) { */
/* module.hot.accept("./App", render); */
/* } */

render();

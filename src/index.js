import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import STORE from "./store";

ReactDOM.render(
  <Provider store={STORE}>
    <App />
  </Provider>,
  document.getElementById("root")
);

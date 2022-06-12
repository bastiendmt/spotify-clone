import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.module.scss";

import { Provider } from "react-redux";
import { compose } from "redux";
import { store } from "./store/store";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

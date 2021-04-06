import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import playlistReducer from "./store/reducers/playlists";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(playlistReducer, composeEnhancers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

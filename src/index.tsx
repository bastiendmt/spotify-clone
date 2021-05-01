import React from "react";
import ReactDOM from "react-dom";
import "./index.module.scss";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, compose, combineReducers } from "redux";
import playlistReducer from "./store/reducers/playlists";
import playingReducer from "./store/reducers/playing";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  playlists: playlistReducer,
  playing: playingReducer,
});

const store = createStore(reducers, composeEnhancers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

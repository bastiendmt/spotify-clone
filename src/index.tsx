import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { compose } from 'redux';
import App from './App';
import './index.module.scss';
import { store } from './store/store';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

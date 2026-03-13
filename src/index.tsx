import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.scss';

const container = document.getElementById('root');
// biome-ignore lint/style/noNonNullAssertion: We are sure that the element with id 'root' exists in our HTML, so we can safely use the non-null assertion operator here
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

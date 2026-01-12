import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = React.DOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> removed to prevent fetching data twice used in useEffect.
  <App/>
  /* </React.StrictMode> */
);
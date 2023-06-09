import React from 'react';
import ReactDOM from 'react-dom/client';

import "./assets/css/reset.css";

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('commenthub'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

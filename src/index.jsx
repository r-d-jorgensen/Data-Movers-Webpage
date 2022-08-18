import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import initFacebookSdk from './services/initFacebookSdk';
import App from './App';;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

initFacebookSdk();
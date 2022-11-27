import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";

import reportWebVitals from './reportWebVitals';
import { MainStateProvider } from './Contexts/MainContext';
import {App} from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MainStateProvider>
      <BrowserRouter>
  <React.StrictMode>
  <Auth0Provider
      domain="dev-0ebp2zqqkdgqrmoi.us.auth0.com"
      clientId="mDgNVpAepeHwyiNWTtCwzaQmeLfDG2Iy"
      redirectUri={window.location.origin}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
  </BrowserRouter>
  </MainStateProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from 'react-dom/client' instead of 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-41dckviu57shcx1y.us.auth0.com"
      clientId="mHl5xk7YuQnN8aktcx3X6Pr9By4OLkEw"
      authorizationParams={{
        redirect_uri: window.location.origin // Use authorizationParams.redirect_uri
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

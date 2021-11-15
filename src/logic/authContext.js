import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const AuthGlobalProvider = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

/*
  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };
*/
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      scope="read:current_user update:current_user_metadata"
      audience="https://dev-hi88mf9v.us.auth0.com/api/v2/"
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthGlobalProvider;

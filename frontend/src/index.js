import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import {GlobalState} from "./logic/globalState";

// styles

import './styles/index.css';
import './styles/home.css';
import './styles/forms.css';
import './styles/navbar.css'
import './styles/logic.css'


ReactDOM.render(
    <React.StrictMode>
        <GlobalState>
                <Auth0Provider
      domain="dev-tx38-htv.us.auth0.com"
      clientId="kGIdpfDDYZ2LKCLKCoqYaDvivn80aJ5k"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
        </GlobalState>
    </React.StrictMode>,
    document.getElementById('root')
);

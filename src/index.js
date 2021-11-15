import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalState} from "./logic/globalState";
import AuthGlobalProvider from './logic/authContext'; 

// styles

import './styles/index.css';
import './styles/home.css';
import './styles/forms.css';
import './styles/navbar.css'
import './styles/logic.css'


ReactDOM.render(
    <React.StrictMode>
        <AuthGlobalProvider>
            <GlobalState>
                    <App />
            </GlobalState>
        </AuthGlobalProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

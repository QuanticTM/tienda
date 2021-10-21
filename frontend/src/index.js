import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalState} from "./logic/globalState";

// styles

import './styles/index.css';
import './styles/home.css';
import './styles/forms.css';
import './styles/navbar.css'


ReactDOM.render(
    <React.StrictMode>
        <GlobalState>
            <App />
        </GlobalState>
    </React.StrictMode>,
    document.getElementById('root')
);

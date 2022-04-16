import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import CaptchaTest from './captcha_test';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <CaptchaTest />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
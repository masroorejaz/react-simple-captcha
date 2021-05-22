import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import CaptchaTest from './captcha_test';
import * as serviceWorker from './serviceWorker';


// kjjjoj
ReactDOM.render(
    <BrowserRouter>
        <CaptchaTest />
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();

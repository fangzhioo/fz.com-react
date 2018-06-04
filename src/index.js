import React from 'react';
import ReactDOM from 'react-dom';
import './assets/common/css/base.css';
import 'antd/dist/antd.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

window.$http = axios;

ReactDOM.render(
    <App />,
     document.getElementById('root')
);
registerServiceWorker();

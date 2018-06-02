import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './layouts/app';
import App from './App';
import {rootStore} from './stores';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root><App rootStore={rootStore}/></Root>, document.getElementById('root'));
registerServiceWorker();

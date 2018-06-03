import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Root from './layouts/app';
import App from './App';
import { rootStore } from './stores';
import {config} from './utils'
import registerServiceWorker from './registerServiceWorker';

const { prefix } = config;

const data = {
  user: {},
  permissions: {
    visit: [],
  },
  menu: [
    {
      id: 1,
      icon: 'laptop',
      name: 'Dashboard',
      router: '/dashboard',
    },
  ],
  menuPopoverVisible: false,
  siderFold: window.localStorage.getItem(`${prefix}siderFold`) === 'true',
  darkTheme: window.localStorage.getItem(`${prefix}darkTheme`) === 'true',
  isNavbar: document.body.clientWidth < 769,
  navOpenKeys: JSON.parse(window.localStorage.getItem(`${prefix}navOpenKeys`)) || [],
  locationPathname: '',
  locationQuery: {},
};

ReactDOM.render(
<Root app={data}><App rootStore={rootStore} /></Root>, 
document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Root from './layouts/app';
// import App from './App';
import { rootStore } from './stores';
// import {config} from './utils'
import registerServiceWorker from './registerServiceWorker';

// const { prefix } = config;


ReactDOM.render(
  <Router>
    <Switch>
        <Route name="index" path="/" render={(props) => <Root rootStore={rootStore} {...props}/>}  />
      {/* <Root app={data}><App rootStore={rootStore} /></Root> */}
    </Switch>
  </Router>, 
document.getElementById('root'));
registerServiceWorker();

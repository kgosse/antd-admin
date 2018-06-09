import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Root from './layouts/app';
import Login from './pages/login';
import { rootStore } from './stores';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route name="login" exact path="/login" render={(props) => <Login rootStore={rootStore} {...props} />} />
      <Route name="index" path="/" render={(props) => <Root rootStore={rootStore} {...props} />} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();

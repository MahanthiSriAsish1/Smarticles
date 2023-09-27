// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import App from '../App';


function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/loginSuccessful" component={App} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default AppRouter;

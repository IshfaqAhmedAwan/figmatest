import HomePage from 'components/HomePage';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserContainer from 'pages/User/containers/UserContainer';

function UserRoutes() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={UserContainer} />
        <Route path='/home-page' component={HomePage} />
      </Switch>
    </Router>
  );
}

export default UserRoutes;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../Register';
import Login from '../Login';
import Alert from '../layout/Alert';
import Dashboard from '../Dashboard';
import Lists from '../Lists';
import List from '../List';
import FileUpload from '../FileUpload';
import CreateList from '../CreateList';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import { LayoutContainerStyles } from '../styles/LayoutContainerStyles';

const Routes = () => {
  const inLandingPage = window.location.pathname === '/';
  return (
    <LayoutContainerStyles inLandingPage={inLandingPage}>
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/lists" component={Lists} />
        <PrivateRoute exact path="/lists/:id" component={List} />
        <PrivateRoute exact path="/upload" component={FileUpload} />
        <PrivateRoute exact path="/create-list" component={CreateList} />
        <Route component={NotFound} />
      </Switch>
    </LayoutContainerStyles>
  );
};

export default Routes;

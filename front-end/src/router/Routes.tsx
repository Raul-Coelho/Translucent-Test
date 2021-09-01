import { Typography } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import RegisterGamePage from '../pages/RegisterGamePage/RegisterGamePage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/register" exact component={RegisterGamePage} />
    </Switch>
  );
}

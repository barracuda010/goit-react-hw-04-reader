/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Reader from './components/Reader/Reader';
import publications from './components/Publication/publications.json';

const App = () => (
  <Switch>
    <Route
      path="/"
      render={routeProps => <Reader items={publications} {...routeProps} />}
    />
  </Switch>
);
export default App;

import { Route, Router, Switch } from '../src';
import About from './about';
import ErrorBoundary from './error-boundary';
import Home from './home';
import NavBar from './nav-bar';
import NotFound from './not-found';
import React from 'react';

const App = () => (
  <ErrorBoundary>
    <Router>
      <NavBar />

      <Switch>
        <Route path={'/'}>
          <Home />
        </Route>

        <Route path={'/about'}>
          <About />
        </Route>

        <NotFound />
      </Switch>
    </Router>
  </ErrorBoundary>
);

export default App;

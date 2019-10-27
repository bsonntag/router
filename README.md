# @bsonntag/router

[![CircleCI](https://circleci.com/gh/bsonntag/router/tree/master.svg?style=svg)](https://circleci.com/gh/bsonntag/router/tree/master)

A router implementation using React Hooks.

## Usage

```js
import { Route, Router, Switch } from '@bsonntag/router';
import About from './about';
import Home from './home';
import React from 'react';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/'}>
          <Home />
        </Route>

        <Route path={'/about'}>
          <About />
        </Route>

        <Redirect to={'/'} />
      </Switch>
    </Router>
  );
}
```

## Documentation

Read the [docs](./docs/README.md).

## Contributing

Please feel free to submit any issues or pull requests.

## License

MIT

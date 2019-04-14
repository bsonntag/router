import { RouterContext } from './router-context';
import { render } from 'react-testing-library';
import { useMatch } from './match-context';
import React from 'react';
import Route from './route';

describe('Route', () => {
  it('renders its content when the path matches the router location', () => {
    const routerContext = {
      location: { pathname: '/foo' },
    };

    const { container } = render(
      <RouterContext.Provider value={routerContext}>
        <Route path={'/foo'}>bar</Route>
      </RouterContext.Provider>
    );

    expect(container).toHaveTextContent('bar');
  });

  it('renders nothing when the path does not match the router location', () => {
    const routerContext = {
      location: { pathname: '/foo' },
    };

    const { container } = render(
      <RouterContext.Provider value={routerContext}>
        <Route path={'/bar'}>baz</Route>
      </RouterContext.Provider>
    );

    expect(container).toBeEmpty();
  });

  it('passes the match results to the match context', () => {
    const routerContext = {
      location: { pathname: '/foo/bar' },
    };

    function TestRouteMatch() {
      const match = useMatch();

      return match.params.id;
    }

    const { container } = render(
      <RouterContext.Provider value={routerContext}>
        <Route path={'/foo/:id'}>
          <TestRouteMatch />
        </Route>
      </RouterContext.Provider>
    );

    expect(container).toHaveTextContent('bar');
  });
});

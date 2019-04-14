import { RouterContext } from './router-context';
import { render } from 'react-testing-library';
import Switch from './switch';
import React from 'react';
import Route from './route';

describe('Switch', () => {
  it('renders only the first matched route', () => {
    const routerContext = {
      location: { pathname: '/foo' },
    };

    const { container } = render(
      <RouterContext.Provider value={routerContext}>
        <Switch>
          <Route path={'/bar'}>bar</Route>
          <Route path={'/foo'}>foo</Route>
          <Route path={'/foo'}>biz</Route>
        </Switch>
      </RouterContext.Provider>
    );

    expect(container).toHaveTextContent('foo');
    expect(container).not.toHaveTextContent('bar');
    expect(container).not.toHaveTextContent('biz');
  });

  it('renders the first child without a path prop if no previous child matches', () => {
    const routerContext = {
      location: { pathname: '/foo' },
    };

    const { container } = render(
      <RouterContext.Provider value={routerContext}>
        <Switch>
          <Route path={'/bar'}>bar</Route>
          <Route>biz</Route>
          <Route path={'/foo'}>foo</Route>
        </Switch>
      </RouterContext.Provider>
    );

    expect(container).toHaveTextContent('biz');
    expect(container).not.toHaveTextContent('bar');
    expect(container).not.toHaveTextContent('foo');
  });
});

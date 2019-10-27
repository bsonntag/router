import { RouterContext } from './router-context';
import { render } from '@testing-library/react';
import Switch from './switch';
import React from 'react';

describe('Switch', () => {
  it('renders only the first matched route', () => {
    const routerContext = {
      location: { pathname: '/foo' },
    };

    const { container } = render(
      <RouterContext.Provider value={routerContext}>
        <Switch>
          <div path={'/bar'}>bar</div>
          <div path={'/foo'}>foo</div>
          <div path={'/foo'}>biz</div>
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
          <div path={'/bar'}>bar</div>
          <div>biz</div>
          <div path={'/foo'}>foo</div>
        </Switch>
      </RouterContext.Provider>
    );

    expect(container).toHaveTextContent('biz');
    expect(container).not.toHaveTextContent('bar');
    expect(container).not.toHaveTextContent('foo');
  });
});

import { RouterContext } from './router-context';
import { act, render } from 'react-testing-library';
import React from 'react';
import Redirect from './redirect';

describe('Redirect', () => {
  it('calls `navigate` from the router context with its props', () => {
    const routerContext = { navigate: jest.fn() };

    act(() => {
      render(
        <RouterContext.Provider value={routerContext}>
          <Redirect to={'foo'} replace={true} state={'bar'} />
        </RouterContext.Provider>
      );
    });

    expect(routerContext.navigate).toHaveBeenCalledWith({
      pathname: 'foo',
      replace: true,
      state: 'bar',
    });
  });
});

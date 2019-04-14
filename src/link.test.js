import { RouterContext } from './router-context';
import { fireEvent, render } from 'react-testing-library';
import Link from './link';
import React from 'react';

describe('Link', () => {
  it('renders the children', () => {
    const routerContext = { navigate: jest.fn() };

    const { container } = render(
      <RouterContext.Provider value={routerContext}>
        <Link to={'/bar'}>bar</Link>
      </RouterContext.Provider>
    );

    expect(container).toHaveTextContent('bar');
  });

  it('calls `navigate` from the router context when the link is clicked', () => {
    const routerContext = { navigate: jest.fn() };

    const { getByText } = render(
      <RouterContext.Provider value={routerContext}>
        <Link to={'bar'} replace={false} state={'baz'}>
          biz
        </Link>
      </RouterContext.Provider>
    );

    fireEvent.click(getByText('biz'));

    expect(routerContext.navigate).toHaveBeenCalledWith({
      pathname: 'bar',
      replace: false,
      state: 'baz',
    });
  });
});

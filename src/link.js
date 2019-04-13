import React, { useCallback } from 'react';
import useRouter from './use-router';

const Link = props => {
  const { children, replace, state, to, ...rest } = props;
  const { navigate } = useRouter();
  const handleClick = useCallback(event => {
    event.preventDefault();
    navigate({ pathname: to, replace, state });
  }, [to, replace, state]);

  return (
    <a
      {...rest}
      href={to}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default Link;

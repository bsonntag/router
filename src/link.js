import React from 'react';
import useRouter from './use-router';

const Link = ({ children, to, ...rest }) => {
  const { navigate } = useRouter();

  function handleClick(event) {
    event.preventDefault();
    navigate({ pathname: to });
  }

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

import { useRouter } from './router-context';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

const Link = props => {
  const { children, replace, state, to, ...rest } = props;
  const { navigate } = useRouter();
  const handleClick = useCallback(
    event => {
      event.preventDefault();
      navigate({ pathname: to, replace, state });
    },
    [to, replace, state]
  );

  return (
    <a {...rest} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  replace: PropTypes.bool,
  state: PropTypes.any,
  to: PropTypes.string.isRequired,
};

export default Link;

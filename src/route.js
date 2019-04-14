import { MatchContext } from './match-context';
import { useRouter } from './router-context';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import matchPath from './match-path';

const Route = ({ children, partial, path }) => {
  const { location } = useRouter();
  const match = useMemo(() => {
    return matchPath(location.pathname, { partial, path });
  }, [location, partial, path]);

  if (!match) {
    return null;
  }

  return (
    <MatchContext.Provider value={match}>{children}</MatchContext.Provider>
  );
};

Route.propTypes = {
  children: PropTypes.node,
  partial: PropTypes.bool,
  path: PropTypes.string.isRequired,
};

export default Route;

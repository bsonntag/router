import { MatchContext, matchPath } from './match';
import React, { useMemo } from 'react';
import useRouter from './use-router';

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

export default Route;

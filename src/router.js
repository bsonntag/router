import React, { useEffect, useMemo, useState } from 'react';
import RouterContext from './router-context';

function isSameLocation(location, otherLocation) {
  return location.pathname === otherLocation.pathname;
}

const Router = ({ children }) => {
  const [location, setLocation] = useState(() => ({
    pathname: window.location.pathname,
  }));

  const contextValue = useMemo(
    () => ({
      location,
      navigate: location => setLocation(location),
    }),
    [location]
  );

  // Navigate on location change.
  useEffect(() => {
    if (isSameLocation(location, window.location)) {
      return;
    }

    const { pathname, state } = location;

    window.history.pushState({ state }, null, pathname);
  }, [location]);

  // Listen to pop state event.
  useEffect(() => {
    function handlePopState() {
      setLocation({ pathname: window.location.pathname });
    }

    window.addEventListener('popstate', handlePopState);

    return () => {
      return window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;

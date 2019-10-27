import { RouterContext } from './router-context';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

const getWindowLocation = () => ({
  hash: window.location.hash,
  host: window.location.host,
  hostname: window.location.hostname,
  href: window.location.href,
  origin: window.location.origin,
  pathname: window.location.pathname,
  port: window.location.port,
  protocol: window.location.protocol,
  search: window.location.search,
  state: window.history.state,
});

function goBack() {
  window.history.back();
}

const Router = ({ children }) => {
  const [location, setLocation] = useState(getWindowLocation);
  const navigate = useCallback(({ pathname, replace, state }) => {
    if (replace) {
      window.history.replaceState({ state }, null, pathname);
    } else {
      window.history.pushState({ state }, null, pathname);
    }
    setLocation(getWindowLocation());
  }, []);

  const contextValue = useMemo(() => ({ goBack, location, navigate }), [
    location,
    navigate,
  ]);

  // Listen to pop state event.
  useEffect(() => {
    function handlePopState() {
      setLocation(getWindowLocation());
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

Router.propTypes = { children: PropTypes.node };

export default Router;

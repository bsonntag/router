import { createContext, useContext } from 'react';

export const MatchContext = createContext({ match: null });
export const useMatch = () => useContext(MatchContext);

function getParamKeys(path) {
  const keys = path.match(/:[^/]+/g);

  if (!keys) {
    return [];
  }

  return keys.map(key => key.replace(':', ''));
}

export function matchPath(pathname, { partial, path }) {
  if (path == null) {
    return { path };
  }

  const routeRegex = new RegExp(
    `^${path.replace(/:[^/]+/g, '([^/]+)')}${partial ? '' : '$'}`
  );

  const match = routeRegex.exec(pathname);

  if (!match) {
    return null;
  }

  const paramKeys = getParamKeys(path);
  const [url, ...paramValues] = match;
  const params = paramKeys.reduce((params, key, index) => {
    params[key] = paramValues[index];

    return params;
  }, {});

  return { params, path, url };
}

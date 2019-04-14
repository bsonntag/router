function getParamKeys(path) {
  const keys = path.match(/:[^/]+/g);

  if (!keys) {
    return [];
  }

  return keys.map(key => key.replace(':', ''));
}

export default function matchPath(pathname, { partial, path }) {
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
  const params = paramKeys.reduce((result, key, index) => {
    result[key] = paramValues[index];

    return result;
  }, {});

  return { params, path, url };
}

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = matchPath;

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

function _iterableToArray(iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === '[object Arguments]'
  )
    return Array.from(iter);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function getParamKeys(path) {
  var keys = path.match(/:[^/]+/g);

  if (!keys) {
    return [];
  }

  return keys.map(function(key) {
    return key.replace(':', '');
  });
}

function matchPath(pathname, _ref) {
  var partial = _ref.partial,
    path = _ref.path;

  if (path == null) {
    return {
      path: path,
    };
  }

  var routeRegex = new RegExp(
    '^'.concat(path.replace(/:[^/]+/g, '([^/]+)')).concat(partial ? '' : '$')
  );
  var match = routeRegex.exec(pathname);

  if (!match) {
    return null;
  }

  var paramKeys = getParamKeys(path);

  var _match = _toArray(match),
    url = _match[0],
    paramValues = _match.slice(1);

  var params = paramKeys.reduce(function(result, key, index) {
    result[key] = paramValues[index];
    return result;
  }, {});
  return {
    params: params,
    path: path,
    url: url,
  };
}

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _routerContext = require('./router-context');

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireWildcard(require('react'));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  if (obj != null) {
    var hasPropertyDescriptor =
      Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor
          ? Object.getOwnPropertyDescriptor(obj, key)
          : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

function _iterableToArrayLimit(arr, i) {
  if (
    !(
      Symbol.iterator in Object(arr) ||
      Object.prototype.toString.call(arr) === '[object Arguments]'
    )
  ) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var getWindowLocation = function getWindowLocation() {
  return {
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
  };
};

function goBack() {
  window.history.back();
}

var Router = function Router(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)(getWindowLocation),
    _useState2 = _slicedToArray(_useState, 2),
    location = _useState2[0],
    setLocation = _useState2[1];

  var navigate = (0, _react.useCallback)(function(_ref2) {
    var pathname = _ref2.pathname,
      replace = _ref2.replace,
      state = _ref2.state;

    if (replace) {
      window.history.replaceState(
        {
          state: state,
        },
        null,
        pathname
      );
    } else {
      window.history.pushState(
        {
          state: state,
        },
        null,
        pathname
      );
    }

    setLocation(getWindowLocation());
  }, []);
  var contextValue = (0, _react.useMemo)(
    function() {
      return {
        goBack: goBack,
        location: location,
        navigate: navigate,
      };
    },
    [location, navigate]
  ); // Listen to pop state event.

  (0, _react.useEffect)(function() {
    function handlePopState() {
      setLocation(getWindowLocation());
    }

    window.addEventListener('popstate', handlePopState);
    return function() {
      return window.removeEventListener('popstate', handlePopState);
    };
  }, []);
  return _react['default'].createElement(
    _routerContext.RouterContext.Provider,
    {
      value: contextValue,
    },
    children
  );
};

Router.propTypes = {
  children: _propTypes['default'].node,
};
var _default = Router;
exports['default'] = _default;

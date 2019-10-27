'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _matchContext = require('./match-context');

var _routerContext = require('./router-context');

var _propTypes = _interopRequireDefault(require('prop-types'));

var _react = _interopRequireWildcard(require('react'));

var _matchPath = _interopRequireDefault(require('./match-path'));

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

var Route = function Route(_ref) {
  var children = _ref.children,
    partial = _ref.partial,
    path = _ref.path;

  var _useRouter = (0, _routerContext.useRouter)(),
    location = _useRouter.location;

  var match = (0, _react.useMemo)(
    function() {
      return (0, _matchPath['default'])(location.pathname, {
        partial: partial,
        path: path,
      });
    },
    [location, partial, path]
  );

  if (!match) {
    return null;
  }

  return _react['default'].createElement(
    _matchContext.MatchContext.Provider,
    {
      value: match,
    },
    children
  );
};

Route.propTypes = {
  children: _propTypes['default'].node,
  partial: _propTypes['default'].bool,
  path: _propTypes['default'].string.isRequired,
};
var _default = Route;
exports['default'] = _default;

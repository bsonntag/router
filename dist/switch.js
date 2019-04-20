'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = require('react');

var _routerContext = require('./router-context');

var _propTypes = _interopRequireDefault(require('prop-types'));

var _matchPath = _interopRequireDefault(require('./match-path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Switch = function Switch(_ref) {
  var children = _ref.children;

  var _useRouter = (0, _routerContext.useRouter)(),
    location = _useRouter.location;

  return _react.Children.toArray(children).find(function(child) {
    return (0, _matchPath['default'])(location.pathname, child.props);
  });
};

Switch.propTypes = {
  children: _propTypes['default'].node,
};
var _default = Switch;
exports['default'] = _default;

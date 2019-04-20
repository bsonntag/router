'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = require('react');

var _routerContext = require('./router-context');

var _propTypes = _interopRequireDefault(require('prop-types'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Redirect = function Redirect(_ref) {
  var replace = _ref.replace,
    state = _ref.state,
    to = _ref.to;

  var _useRouter = (0, _routerContext.useRouter)(),
    navigate = _useRouter.navigate;

  (0, _react.useEffect)(function() {
    navigate({
      pathname: to,
      replace: replace,
      state: state,
    });
  });
  return null;
};

Redirect.propTypes = {
  replace: _propTypes['default'].bool,
  state: _propTypes['default'].any,
  to: _propTypes['default'].string.isRequired,
};
var _default = Redirect;
exports['default'] = _default;

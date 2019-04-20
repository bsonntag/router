'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.useRouter = exports.RouterContext = void 0;

var _react = require('react');

var RouterContext = (0, _react.createContext)();
exports.RouterContext = RouterContext;

var useRouter = function useRouter() {
  return (0, _react.useContext)(RouterContext);
};

exports.useRouter = useRouter;

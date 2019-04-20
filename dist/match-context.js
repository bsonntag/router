'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.useMatch = exports.MatchContext = void 0;

var _react = require('react');

var MatchContext = (0, _react.createContext)({
  match: null,
});
exports.MatchContext = MatchContext;

var useMatch = function useMatch() {
  return (0, _react.useContext)(MatchContext);
};

exports.useMatch = useMatch;

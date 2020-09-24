"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countString = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash"));

var _constant = require("./constant");

var countString = function countString(input) {
  input = input.toLowerCase();
  var withSpaces = input.length;
  var withoutSpaces = input.match(_constant.nonSpace).length;
  var wordCount = input.trim().split(_constant.spaceBetween).length;
  var characterCount = countCharacter(input);
  return {
    textLength: {
      withSpaces: withSpaces,
      withoutSpaces: withoutSpaces
    },
    wordCount: wordCount,
    characterCount: characterCount
  };
};

exports.countString = countString;

var countCharacter = function countCharacter(input) {
  var array = input.match(_constant.alphabet).sort();

  var result = _lodash["default"].sortedUniq(array);

  var countChar = function countChar(_char) {
    return (0, _defineProperty2["default"])({}, "".concat(_char), input.match(new RegExp("".concat(_char), "g")).length);
  };

  return _lodash["default"].map(result, countChar);
};
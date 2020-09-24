"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countCharacter = exports.countString = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash"));

var _constant = require("./constant");

var countString = function countString(input) {
  var withSpaces = input.length;
  input = input.trim();
  var withoutSpaces = input ? input.match(_constant.nonSpace).length : 0;
  var wordCount = input ? input.split(_constant.spaceBetween).length : 0;
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
  var array = input.match(_constant.alphabet);

  if (!array) {
    return [];
  } else {
    input = input.toLowerCase();

    var sortedChar = _lodash["default"].sortedUniq(array.sort());

    var countChar = function countChar(_char) {
      return (0, _defineProperty2["default"])({}, "".concat(_char), input.match(new RegExp("".concat(_char), "g")).length);
    };

    return _lodash["default"].map(sortedChar, countChar);
  }
};

exports.countCharacter = countCharacter;
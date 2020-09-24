"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alphabet = exports.spaceBetween = exports.nonSpace = void 0;
var nonSpace = /\S/g;
exports.nonSpace = nonSpace;
var spaceBetween = /\s+/;
exports.spaceBetween = spaceBetween;
var alphabet = /[a-z]/g;
exports.alphabet = alphabet;
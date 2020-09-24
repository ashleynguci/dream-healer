"use strict";

var _service = require("../service");

test('should return {\'a\':1}', function () {
  var result = (0, _service.countString)('run 2 2 world and see   2');
  expect(result.characterCount[0]).toMatchObject({
    "a": 1
  });
});
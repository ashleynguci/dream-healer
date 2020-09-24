"use strict";

var _service = require("../service");

describe(" test countString function", function () {
  test("Test with trailing spaces", function () {
    var result = (0, _service.countString)(" trailing spaces...     ");
    expect(result.textLength.withoutSpaces).toBe(17);
  });
  test("should count only alphabet in characterCount", function () {
    var result = (0, _service.countString)("   @ 2 2 aaa bbb   ");
    expect(result.characterCount.length).toBe(2);
  });
  test("should return wordCount value is 5", function () {
    var result = (0, _service.countString)("  2 cc aaa 4  bbb   ");
    expect(result.wordCount).toBe(5);
  });
  test("test empty text ", function () {
    var result = (0, _service.countString)("    ");
    expect(result.characterCount).toStrictEqual([]);
  });
});
describe('countCharacter', function () {
  test("should return []", function () {
    var result = (0, _service.countCharacter)("7, 8");
    expect(result).toStrictEqual([]);
  });
});
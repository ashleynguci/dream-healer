"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _controller = require("../controller");

var _mockHttp = require("./mockHttp");

describe(' Controller', function () {
  beforeEach(function () {
    return jest.clearAllMocks();
  });
  var request = (0, _mockHttp.mockRequest)();
  var response = (0, _mockHttp.mockResponse)();
  test('it should be called ', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            request.body = {
              'text': 'hello world ! '
            };
            _context.next = 3;
            return (0, _controller.healTheDream)(request, response);

          case 3:
            expect(response.send).toHaveBeenCalledTimes(1);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});
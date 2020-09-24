"use strict";

var _controller = require("../controller");

var _mockHttp = require("./mockHttp");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe(' Controller', function () {
  beforeEach(function () {
    return jest.clearAllMocks();
  });
  var request = (0, _mockHttp.mockRequest)();
  var response = (0, _mockHttp.mockResponse)();
  test('it should return  ', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
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
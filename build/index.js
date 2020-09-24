"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _controller = require("./controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
var port = 3000;
app.post('/analyze', _controller.healTheDream);
app.listen(port, function () {
  console.log(process.env);
  console.log("Example app listening at http://localhost:".concat(port));
});
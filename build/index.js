"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _controller = require("./controller");

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
var port = process.env.PORT || 3000;
app.post('/analyze', _controller.healTheDream);
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});
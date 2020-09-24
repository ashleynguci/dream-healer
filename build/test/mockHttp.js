"use strict";

module.exports = {
  mockRequest: function mockRequest() {
    var req = {};
    req.body = jest.fn().mockReturnValue(req);
    req.params = jest.fn().mockReturnValue(req);
    return req;
  },
  mockResponse: function mockResponse() {
    var res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  } // mockNext: () => jest.fn()

};
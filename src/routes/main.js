"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRoute = void 0;

var _decorators = require("@sapphire/decorators");

var _pluginApi = require("@sapphire/plugin-api");

var _dec, _class;

let UserRoute = (_dec = (0, _decorators.ApplyOptions)({
  route: ''
}), _dec(_class = class UserRoute extends _pluginApi.Route {
  [_pluginApi.methods.GET](_request, response) {
    response.json({
      message: 'Landing Page!'
    });
  }

  [_pluginApi.methods.POST](_request, response) {
    response.json({
      message: 'Landing Page!'
    });
  }

}) || _class);
exports.UserRoute = UserRoute;
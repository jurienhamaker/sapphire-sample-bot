"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRoute = void 0;

var _pluginApi = require("@sapphire/plugin-api");

class UserRoute extends _pluginApi.Route {
  constructor(context, options) {
    super(context, { ...options,
      route: 'hello-world'
    });
  }

  [_pluginApi.methods.GET](_request, response) {
    response.json({
      message: 'Hello World'
    });
  }

  [_pluginApi.methods.POST](_request, response) {
    response.json({
      message: 'Hello World'
    });
  }

}

exports.UserRoute = UserRoute;
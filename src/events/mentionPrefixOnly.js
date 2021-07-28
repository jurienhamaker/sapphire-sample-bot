"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _framework = require("@sapphire/framework");

class _default extends _framework.Event {
  async run(message) {
    const prefix = 'dr!';
    return message.channel.send(prefix ? `My prefix in this guild is: \`${prefix}\`` : 'You do not need a prefix in DMs.');
  }

}

exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserCommand = void 0;

var _decorators = require("@sapphire/decorators");

var _framework = require("@sapphire/framework");

var _dec, _class;

let UserCommand = (_dec = (0, _decorators.ApplyOptions)({
  description: 'ping pong',
  enabled: true
}), _dec(_class = class UserCommand extends _framework.Command {
  async run(message) {
    const msg = await message.channel.send('Ping?');
    return msg.edit(`Pong! Bot Latency ${Math.round(this.context.client.ws.ping)}ms. API Latency ${msg.createdTimestamp - message.createdTimestamp}ms.`);
  }

}) || _class);
exports.UserCommand = UserCommand;
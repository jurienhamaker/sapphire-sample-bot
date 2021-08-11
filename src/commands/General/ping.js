"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserCommand = void 0;

var _framework = require("@sapphire/framework");

class UserCommand extends _framework.Command {
  constructor(context, options) {
    super(context, { ...options,
      description: 'ping pong'
    });
  }

  async run(message) {
    const msg = await message.channel.send('Ping?');
    return msg.edit(`Pong! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${msg.createdTimestamp - message.createdTimestamp}ms.`);
  }

}

exports.UserCommand = UserCommand;
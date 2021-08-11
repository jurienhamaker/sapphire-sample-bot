"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserEvent = void 0;

var _framework = require("@sapphire/framework");

class UserEvent extends _framework.Listener {
  async run({
    context,
    message: content
  }, {
    message
  }) {
    // `context: { silent: true }` should make UserError silent:
    // Use cases for this are for example permissions error when running the `eval` command.
    if (Reflect.get(Object(context), 'silent')) return;
    return message.channel.send({
      content,
      allowedMentions: {
        users: [message.author.id],
        roles: []
      }
    });
  }

}

exports.UserEvent = UserEvent;
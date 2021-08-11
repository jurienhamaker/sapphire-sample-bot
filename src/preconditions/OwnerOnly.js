"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserPrecondition = void 0;

var _framework = require("@sapphire/framework");

var _envParser = require("../lib/env-parser");

const OWNERS = (0, _envParser.envParseArray)('OWNERS');

class UserPrecondition extends _framework.Precondition {
  async run(message) {
    return OWNERS.includes(message.author.id) ? this.ok() : this.error({
      message: 'This command can only be used by the owner.'
    });
  }

}

exports.UserPrecondition = UserPrecondition;
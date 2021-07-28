"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserEvent = void 0;

var _decorators = require("@sapphire/decorators");

var _framework = require("@sapphire/framework");

var _colorette = require("colorette");

var _dec, _class;

let UserEvent = (_dec = (0, _decorators.ApplyOptions)({
  event: _framework.Events.CommandSuccess
}), _dec(_class = class UserEvent extends _framework.Event {
  run({
    message,
    command
  }) {
    var _message$guild;

    const shard = this.shard(((_message$guild = message.guild) === null || _message$guild === void 0 ? void 0 : _message$guild.shardID) ?? 0);
    const commandName = this.command(command);
    const author = this.author(message.author);
    const sentAt = message.guild ? this.guild(message.guild) : this.direct();
    this.context.logger.debug(`${shard} - ${commandName} ${author} ${sentAt}`);
  }

  onLoad() {
    this.enabled = this.context.logger.level <= _framework.LogLevel.Debug;
    return super.onLoad();
  }

  shard(id) {
    return `[${(0, _colorette.cyan)(id.toString())}]`;
  }

  command(command) {
    return (0, _colorette.cyan)(command.name);
  }

  author(author) {
    return `${author.username}[${(0, _colorette.cyan)(author.id)}]`;
  }

  direct() {
    return (0, _colorette.cyan)('Direct Messages');
  }

  guild(guild) {
    return `${guild.name}[${(0, _colorette.cyan)(guild.id)}]`;
  }

}) || _class);
exports.UserEvent = UserEvent;
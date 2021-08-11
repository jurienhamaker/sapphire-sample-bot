"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserEvent = void 0;

var _framework = require("@sapphire/framework");

var _colorette = require("colorette");

class UserEvent extends _framework.Listener {
  constructor(context, options) {
    super(context, { ...options,
      event: _framework.Events.CommandSuccess
    });
  }

  run({
    message,
    command
  }) {
    var _message$guild;

    const shard = this.shard(((_message$guild = message.guild) === null || _message$guild === void 0 ? void 0 : _message$guild.shardId) ?? 0);
    const commandName = this.command(command);
    const author = this.author(message.author);
    const sentAt = message.guild ? this.guild(message.guild) : this.direct();
    this.container.logger.debug(`${shard} - ${commandName} ${author} ${sentAt}`);
  }

  onLoad() {
    this.enabled = this.container.logger.level <= _framework.LogLevel.Debug;
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

}

exports.UserEvent = UserEvent;
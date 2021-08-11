"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserCommand = void 0;

var _decorators = require("@sapphire/decorators");

var _pluginSubcommands = require("@sapphire/plugin-subcommands");

var _discord = require("discord.js");

var _dec, _dec2, _dec3, _dec4, _class, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

let UserCommand = (_dec = (0, _decorators.ApplyOptions)({
  aliases: ['cws'],
  description: 'A basic command with some subcommands',
  subCommands: ['add', {
    input: 'create',
    output: 'add'
  }, 'remove', 'reset', {
    input: 'show',
    default: true
  }]
}), _dec2 = (0, _decorators.RequiresPermissions)('EMBED_LINKS'), _dec3 = (0, _decorators.RequiresGuildContext)(message => message.channel.send('This sub-command can only be used in servers')), _dec4 = (0, _decorators.RequiresDMContext)(message => message.channel.send('This sub-command can only be used in DMs')), _dec(_class = (_class2 = class UserCommand extends _pluginSubcommands.SubCommandPluginCommand {
  // Anyone should be able to view the result, but not modify
  async show(message) {
    return message.channel.send('Showing!');
  }

  async add(message) {
    const embed = new _discord.MessageEmbed() //
    .setColor('#3986E4').setDescription('Added!').setTitle('Configuration Log').setTimestamp();
    return message.channel.send({
      embed
    });
  }

  async remove(message) {
    return message.channel.send('Removing!');
  }

  async reset(message) {
    return message.channel.send('Resetting!');
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "add", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "add"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "remove", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "remove"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "reset", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "reset"), _class2.prototype)), _class2)) || _class);
exports.UserCommand = UserCommand;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserCommand = void 0;

var _decorators = require("@sapphire/decorators");

var _pluginSubcommands = require("@sapphire/plugin-subcommands");

var _dec, _dec2, _dec3, _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

let UserCommand = (_dec = (0, _decorators.RequiresPermissions)('MANAGE_MESSAGES'), _dec2 = (0, _decorators.RequiresGuildContext)(message => message.channel.send('This command can only be used in servers')), _dec3 = (0, _decorators.RequiresDMContext)(message => message.channel.send('This command can only be used in DMs')), (_class = class UserCommand extends _pluginSubcommands.SubCommandPluginCommand {
  constructor(context, options) {
    super(context, { ...options,
      aliases: ['cws'],
      description: 'A basic command with some subcommands',
      subCommands: ['add', {
        input: 'create',
        output: 'add'
      }, 'remove', 'reset', {
        input: 'show',
        default: true
      }]
    });
  } // Anyone should be able to view the result, but not modify


  async show(message) {
    return message.channel.send('Showing!');
  }

  async add(message) {
    return message.channel.send('Adding!');
  }

  async remove(message) {
    return message.channel.send('Removing!');
  }

  async reset(message) {
    return message.channel.send('Resetting!');
  }

}, (_applyDecoratedDescriptor(_class.prototype, "add", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "add"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "remove", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "remove"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "reset", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "reset"), _class.prototype)), _class));
exports.UserCommand = UserCommand;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserCommand = void 0;

var _pluginSubcommands = require("@sapphire/plugin-subcommands");

class UserCommand extends _pluginSubcommands.SubCommandPluginCommand {
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

}

exports.UserCommand = UserCommand;
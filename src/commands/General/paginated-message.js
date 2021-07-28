"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserCommand = void 0;

var _decorators = require("@sapphire/decorators");

var _discord = require("@sapphire/discord.js-utilities");

var _framework = require("@sapphire/framework");

var _discord2 = require("discord.js");

var _utils = require("../../lib/utils");

var _dec, _class;

let UserCommand = (_dec = (0, _decorators.ApplyOptions)({
  aliases: ['pm'],
  description: 'A command that uses paginated messages.',
  generateDashLessAliases: true
}), _dec(_class = class UserCommand extends _framework.Command {
  async run(message) {
    const response = await (0, _utils.sendLoadingMessage)(message);
    const paginatedMessage = new _discord.PaginatedMessage({
      template: new _discord2.MessageEmbed().setColor('#FF0000') // Be sure to add a space so this is offset from the page numbers!
      .setFooter(' footer after page numbers')
    });
    paginatedMessage.addPageEmbed(embed => embed //
    .setDescription('This is the first page').setTitle('Page 1')).addPageBuilder(builder => builder //
    .setContent('This is the second page').setEmbed(new _discord2.MessageEmbed().setTimestamp()));
    await paginatedMessage.run(response, message.author);
    return response;
  }

}) || _class);
exports.UserCommand = UserCommand;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pickRandom = pickRandom;
exports.sendLoadingMessage = sendLoadingMessage;

var _editableCommands = require("@skyra/editable-commands");

var _discord = require("discord.js");

var _constants = require("./constants");

/**
 * Picks a random item from an array
 * @param array The array to pick a random item from
 * @example
 * const randomEntry = pickRandom([1, 2, 3, 4]) // 1
 */
function pickRandom(array) {
  const {
    length
  } = array;
  return array[Math.floor(Math.random() * length)];
}
/**
 * Sends a loading message to the current channel
 * @param message The message data for which to send the loading message
 */


function sendLoadingMessage(message) {
  return (0, _editableCommands.send)(message, {
    embeds: [new _discord.MessageEmbed().setDescription(pickRandom(_constants.RandomLoadingMessage)).setColor('#FF0000')]
  });
}
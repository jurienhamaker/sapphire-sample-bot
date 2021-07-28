import { MessageEmbed } from 'discord.js';
import { RandomLoadingMessage } from './constants';
/**
 * Picks a random item from an array
 * @param array The array to pick a random item from
 * @example
 * const randomEntry = pickRandom([1, 2, 3, 4]) // 1
 */

export function pickRandom(array) {
  const {
    length
  } = array;
  return array[Math.floor(Math.random() * length)];
}
/**
 * Sends a loading message to the current channel
 * @param message The message data for which to send the loading message
 */

export function sendLoadingMessage(message) {
  return message.send(new MessageEmbed().setDescription(pickRandom(RandomLoadingMessage)).setColor('#FF0000'));
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.envParseArray = envParseArray;

var _utilities = require("@sapphire/utilities");

function envParseArray(key, defaultValue) {
  const value = process.env[key];

  if ((0, _utilities.isNullishOrEmpty)(value)) {
    if (defaultValue === undefined) throw new Error(`[ENV] ${key} - The key must be an array, but is empty or undefined.`);
    return defaultValue;
  }

  return value.split(' ');
}
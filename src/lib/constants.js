"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RandomLoadingMessage = exports.srcDir = exports.rootDir = void 0;

var _path = require("path");

const rootDir = (0, _path.join)(__dirname, '..', '..');
exports.rootDir = rootDir;
const srcDir = (0, _path.join)(rootDir, 'src');
exports.srcDir = srcDir;
const RandomLoadingMessage = ['Computing...', 'Thinking...', 'Cooking some food', 'Give me a moment', 'Loading...'];
exports.RandomLoadingMessage = RandomLoadingMessage;
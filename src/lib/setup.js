"use strict";

require("reflect-metadata");

require("@sapphire/plugin-logger/register");

require("@sapphire/plugin-api/register");

require("@skyra/editable-commands");

var _colorette = require("colorette");

var _dotenvCra = require("dotenv-cra");

var _path = require("path");

var _util = require("util");

var _constants = require("./constants");

// Unless explicitly defined, set NODE_ENV as development:
process.env.NODE_ENV ??= 'development';
// Read env var
(0, _dotenvCra.config)({
  path: (0, _path.join)(_constants.srcDir, '.env')
}); // Set default inspection depth

_util.inspect.defaultOptions.depth = 1; // Enable colorette

_colorette.options.enabled = true;
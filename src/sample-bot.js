"use strict";

require("./lib/setup");

var _framework = require("@sapphire/framework");

const client = new _framework.SapphireClient({
  defaultPrefix: 'dr!',
  regexPrefix: /^(hey +)?dragon[,! ]/i,
  caseInsensitiveCommands: true,
  logger: {
    level: _framework.LogLevel.Debug
  },
  shards: 'auto',
  intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_BANS', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_VOICE_STATES', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS']
});

const main = async () => {
  try {
    client.logger.info('Logging in');
    await client.login();
    client.logger.info('logged in');
  } catch (error) {
    client.logger.fatal(error);
    client.destroy();
    process.exit(1);
  }
};

main();
var _dec, _class;

import { ApplyOptions } from '@sapphire/decorators';
import { Command } from '@sapphire/framework';
export let UserCommand = (_dec = ApplyOptions({
  description: 'ping pong',
  enabled: true
}), _dec(_class = class UserCommand extends Command {
  async run(message) {
    const msg = await message.channel.send('Ping?');
    return msg.edit(`Pong! Bot Latency ${Math.round(this.context.client.ws.ping)}ms. API Latency ${msg.createdTimestamp - message.createdTimestamp}ms.`);
  }

}) || _class);
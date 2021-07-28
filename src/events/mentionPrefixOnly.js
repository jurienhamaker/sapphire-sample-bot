import { Event } from '@sapphire/framework';
export default class extends Event {
  async run(message) {
    const prefix = 'dr!';
    return message.channel.send(prefix ? `My prefix in this guild is: \`${prefix}\`` : 'You do not need a prefix in DMs.');
  }

}
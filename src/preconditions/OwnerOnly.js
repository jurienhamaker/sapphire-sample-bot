import { Precondition } from '@sapphire/framework';
import { envParseArray } from '../lib/env-parser';
const OWNERS = envParseArray('OWNERS');
export default class extends Precondition {
  async run(message) {
    return OWNERS.includes(message.author.id) ? this.ok() : this.error({
      message: 'This command can only be used by the owner.'
    });
  }

}
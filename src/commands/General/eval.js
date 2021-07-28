var _dec, _class2;

import { ApplyOptions } from '@sapphire/decorators';
import { Command } from '@sapphire/framework';
import { Type } from '@sapphire/type';
import { codeBlock, isThenable } from '@sapphire/utilities';
import { inspect } from 'util';

let _class = (_dec = ApplyOptions({
  aliases: ['ev'],
  description: 'Evals any JavaScript code',
  quotes: [],
  preconditions: ['OwnerOnly'],
  strategyOptions: {
    flags: ['async', 'hidden', 'showHidden', 'silent', 's'],
    options: ['depth']
  }
}), _dec(_class2 = class extends Command {
  async run(message, args) {
    const code = await args.rest('string');
    const {
      result,
      success,
      type
    } = await this.eval(message, code, {
      async: args.getFlags('async'),
      depth: Number(args.getOption('depth')) ?? 0,
      showHidden: args.getFlags('hidden', 'showHidden')
    });
    const output = success ? codeBlock('js', result) : `**ERROR**: ${codeBlock('bash', result)}`;
    if (args.getFlags('silent', 's')) return null;
    const typeFooter = `**Type**: ${codeBlock('typescript', type)}`;

    if (output.length > 2000) {
      return message.channel.send(`Output was too long... sent the result as a file.\n\n${typeFooter}`, {
        files: [{
          attachment: Buffer.from(output),
          name: 'output.txt'
        }]
      });
    }

    return message.channel.send(`${output}\n${typeFooter}`);
  }

  async eval(message, code, flags) {
    if (flags.async) code = `(async () => {\n${code}\n})();`; // @ts-expect-error value is never read, this is so `msg` is possible as an alias when sending the eval.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    const msg = message;
    let success = true;
    let result = null;

    try {
      // eslint-disable-next-line no-eval
      result = eval(code);
    } catch (error) {
      if (error && error.stack) {
        this.context.client.logger.error(error);
      }

      result = error;
      success = false;
    }

    const type = new Type(result).toString();
    if (isThenable(result)) result = await result;

    if (typeof result !== 'string') {
      result = inspect(result, {
        depth: flags.depth,
        showHidden: flags.showHidden
      });
    }

    return {
      result,
      success,
      type
    };
  }

}) || _class2);

export { _class as default };
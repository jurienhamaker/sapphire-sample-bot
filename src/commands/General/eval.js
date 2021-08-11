"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserCommand = void 0;

var _framework = require("@sapphire/framework");

var _type = require("@sapphire/type");

var _utilities = require("@sapphire/utilities");

var _util = require("util");

class UserCommand extends _framework.Command {
  constructor(context, options) {
    super(context, { ...options,
      aliases: ['ev'],
      description: 'Evals any JavaScript code',
      quotes: [],
      preconditions: ['OwnerOnly'],
      flags: ['async', 'hidden', 'showHidden', 'silent', 's'],
      options: ['depth']
    });
  }

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
    const output = success ? (0, _utilities.codeBlock)('js', result) : `**ERROR**: ${(0, _utilities.codeBlock)('bash', result)}`;
    if (args.getFlags('silent', 's')) return null;
    const typeFooter = `**Type**: ${(0, _utilities.codeBlock)('typescript', type)}`;

    if (output.length > 2000) {
      return message.channel.send({
        content: `Output was too long... sent the result as a file.\n\n${typeFooter}`,
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
        this.container.client.logger.error(error);
      }

      result = error;
      success = false;
    }

    const type = new _type.Type(result).toString();
    if ((0, _utilities.isThenable)(result)) result = await result;

    if (typeof result !== 'string') {
      result = (0, _util.inspect)(result, {
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

}

exports.UserCommand = UserCommand;
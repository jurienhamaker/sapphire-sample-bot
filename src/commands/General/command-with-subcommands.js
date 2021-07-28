var _dec, _dec2, _dec3, _dec4, _class2, _class3;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

import { ApplyOptions, RequiresDMContext, RequiresGuildContext, RequiresPermissions } from '@sapphire/decorators';
import { SubCommandPluginCommand } from '@sapphire/plugin-subcommands';

let _class = (_dec = ApplyOptions({
  aliases: ['cws'],
  description: 'A basic command with some subcommands',
  subCommands: ['add', {
    input: 'create',
    output: 'add'
  }, 'remove', 'reset', {
    input: 'show',
    default: true
  }]
}), _dec2 = RequiresPermissions('MANAGE_MESSAGES'), _dec3 = RequiresGuildContext(message => message.channel.send('This command can only be used in servers')), _dec4 = RequiresDMContext(message => message.channel.send('This command can only be used in DMs')), _dec(_class2 = (_class3 = class extends SubCommandPluginCommand {
  // Anyone should be able to view the result, but not modify
  async show(message) {
    return message.channel.send('Showing!');
  }

  async add(message) {
    return message.channel.send('Adding!');
  }

  async remove(message) {
    return message.channel.send('Removing!');
  }

  async reset(message) {
    return message.channel.send('Resetting!');
  }

}, (_applyDecoratedDescriptor(_class3.prototype, "add", [_dec2], Object.getOwnPropertyDescriptor(_class3.prototype, "add"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "remove", [_dec3], Object.getOwnPropertyDescriptor(_class3.prototype, "remove"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "reset", [_dec4], Object.getOwnPropertyDescriptor(_class3.prototype, "reset"), _class3.prototype)), _class3)) || _class2);

export { _class as default };
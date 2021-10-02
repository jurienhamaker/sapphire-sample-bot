import '@sapphire/plugin-api/register';
import '@sapphire/plugin-logger/register';
import '@skyra/editable-commands/register';
import { createColors } from 'colorette';
import { inspect } from 'util';

// Set default inspection depth
inspect.defaultOptions.depth = 1;

// Enable colorette
createColors({ useColor: true });

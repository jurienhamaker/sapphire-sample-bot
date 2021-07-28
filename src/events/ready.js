var _dec, _class;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { ApplyOptions } from '@sapphire/decorators';
import { Event } from '@sapphire/framework';
import { blue, gray, green, magenta, magentaBright, white, yellow } from 'colorette';
const dev = process.env.NODE_ENV !== 'production';
export let UserEvent = (_dec = ApplyOptions({
  once: true
}), _dec(_class = class UserEvent extends Event {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "style", dev ? yellow : blue);
  }

  run() {
    this.printBanner();
    this.printStoreDebugInformation();
  }

  printBanner() {
    const success = green('+');
    const llc = dev ? magentaBright : white;
    const blc = dev ? magenta : blue;
    const line01 = llc('');
    const line02 = llc('');
    const line03 = llc(''); // Offset Pad

    const pad = ' '.repeat(7);
    console.log(String.raw`
${line01} ${pad}${blc('1.0.0')}
${line02} ${pad}[${success}] Gateway
${line03}${dev ? ` ${pad}${blc('<')}${llc('/')}${blc('>')} ${llc('DEVELOPMENT MODE')}` : ''}
		`.trim());
  }

  printStoreDebugInformation() {
    const {
      client,
      logger
    } = this.context;
    const stores = [...client.stores.values()];
    const last = stores.pop();

    for (const store of stores) logger.info(this.styleStore(store, false));

    logger.info(this.styleStore(last, true));
  }

  styleStore(store, last) {
    return gray(`${last ? '└─' : '├─'} Loaded ${this.style(store.size.toString().padEnd(3, ' '))} ${store.name}.`);
  }

}) || _class);
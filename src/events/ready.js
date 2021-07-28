"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserEvent = void 0;

var _decorators = require("@sapphire/decorators");

var _framework = require("@sapphire/framework");

var _colorette = require("colorette");

var _dec, _class;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const dev = process.env.NODE_ENV !== 'production';
let UserEvent = (_dec = (0, _decorators.ApplyOptions)({
  once: true
}), _dec(_class = class UserEvent extends _framework.Event {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "style", dev ? _colorette.yellow : _colorette.blue);
  }

  run() {
    this.printBanner();
    this.printStoreDebugInformation();
  }

  printBanner() {
    const success = (0, _colorette.green)('+');
    const llc = dev ? _colorette.magentaBright : _colorette.white;
    const blc = dev ? _colorette.magenta : _colorette.blue;
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
    return (0, _colorette.gray)(`${last ? '└─' : '├─'} Loaded ${this.style(store.size.toString().padEnd(3, ' '))} ${store.name}.`);
  }

}) || _class);
exports.UserEvent = UserEvent;
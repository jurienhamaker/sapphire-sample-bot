var _dec, _class;

import { ApplyOptions } from '@sapphire/decorators';
import { methods, Route } from '@sapphire/plugin-api';
export let UserRoute = (_dec = ApplyOptions({
  route: 'hello-world'
}), _dec(_class = class UserRoute extends Route {
  [methods.GET](_request, response) {
    response.json({
      message: 'Hello World'
    });
  }

  [methods.POST](_request, response) {
    response.json({
      message: 'Hello World'
    });
  }

}) || _class);
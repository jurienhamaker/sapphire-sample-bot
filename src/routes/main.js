var _dec, _class;

import { ApplyOptions } from '@sapphire/decorators';
import { methods, Route } from '@sapphire/plugin-api';
export let UserRoute = (_dec = ApplyOptions({
  route: ''
}), _dec(_class = class UserRoute extends Route {
  [methods.GET](_request, response) {
    response.json({
      message: 'Landing Page!'
    });
  }

  [methods.POST](_request, response) {
    response.json({
      message: 'Landing Page!'
    });
  }

}) || _class);
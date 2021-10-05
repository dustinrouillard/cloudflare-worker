import Route from 'route-parser';

import { Base } from './methods/base';

import { RouteDefinition } from './types/Routes';

export const routes: RouteDefinition[] = [
  { route: new Route('/'), method: 'GET', handler: Base },
];

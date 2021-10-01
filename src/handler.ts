import Route from 'route-parser';

import { Base } from './methods/base';
import { NotFound } from './methods/notfound';
import { RouteDefinition } from './types/Routes';

const routes: RouteDefinition[] = [
  { route: new Route('/'), method: 'GET', handler: Base }
];

export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);

  const route = routes.find((route) => route.route.match(url.pathname.endsWith('/') && url.pathname.length > 1 ? url.pathname.slice(0, -1) : url.pathname) && route.method == request.method);
  if (!route) return NotFound(request);

  const params = route.route.match(url.pathname.endsWith('/') && url.pathname.length > 1 ? url.pathname.slice(0, -1) : url.pathname);

  return route.handler(request, params, url, route.args);
}

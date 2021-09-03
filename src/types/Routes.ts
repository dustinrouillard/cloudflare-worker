import Route from 'route-parser';

export interface RouteDefinition {
  route: Route<{ [i: string]: any; }>;
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';
  handler: (request: Request, params: any, url: URL, args?: any[]) => Promise<Response>;
  args?: any[];
}

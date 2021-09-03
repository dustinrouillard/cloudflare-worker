import { handleRequest } from './handler';

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request).catch(
    (err) => {
      console.error(err, 'error');
      return new Response(JSON.stringify({ code: err.code || 'internal_error' }), { status: err.status || 500, headers: { 'content-type': 'application/json', 'access-control-allow-origin': '*' } });
    }
  ));
});

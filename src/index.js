import http from 'http';

import app from './server';

const server = http.createServer(app);
let currentApp = app;

const service = server.listen(3000, () => {
  console.log('listening on port %d', service.address().port);
});

if (module.hot) {
  module.hot.accept(['./server'], () => {
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app;
  });
}

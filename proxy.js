import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const cors_proxy = require('cors-anywhere');

// Rest of your code...

// Create the CORS Anywhere proxy server
cors_proxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(8080, function() {
  console.log('CORS Anywhere proxy server is running on port 8080');
});

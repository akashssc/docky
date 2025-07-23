const http = require('http');
http.createServer((req, res) => res.end('ok')).listen(9000, () => console.log('Test server running on port 9000')); 
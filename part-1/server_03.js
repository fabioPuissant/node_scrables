var http = require('http');
var server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Hello Worlddd');
  console.log(request.headers);
  response.end();
});

server.listen(3000);

console.log('Server is listening on port: 3000!');

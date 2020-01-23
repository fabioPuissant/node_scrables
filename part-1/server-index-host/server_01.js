var http = require('http');
var fs = require('fs');
var path = require('path');
var root = __dirname + '/public/';
var mime = require('mime');

var server = http.createServer((req, res) => {
  var filename = '';
  var url = req.url;
  if (url === '/') {
    url = 'index.html';
  } else {
    url = '404.html';
  }

  filename = root + url;
  console.log('Gevraagd bestand: ', path.basename(filename));

  // CHECK if file exists
  fs.exists(filename, exists => {
    if (exists) {
      serveFile(filename);
    } else {
      filename = root + '404.html';
      serve404(filename);
    }
  });

  var serveFile = requestedFile => {
    // Set MIME-type of the file in the response
    res.writeHead(200, { 'Content-Type': mime.getType(requestedFile) });
    var stream = fs.createReadStream(requestedFile);
    stream.on('data', chunk => res.write(chunk));
    stream.on('end', () => res.end());
    stream.on('error', err => console.log('Error: ', err));
  };

  var serve404 = requestedFile => {
    res.writeHead(404, { 'Content-Type': mime.getType(requestedFile) });
    fs.readFile(requestedFile, 'utf8', (err, data) =>
      err
        ? console.log('Error: ', err)
        : () => {
            stream.on('data', chunk => res.write(chunk));
            stream.on('end', () => res.end());
          }
    );
  };
});

server.listen(3000);
console.log('Listening on localhost port 3000');

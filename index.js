var fs = require('fs');
var http = require('http');
var GrowingFile = require('growing-file');

var FILENAME = '/home/dave/Desktop/video/video.ogg';

var server = http.createServer(function(req, res) {
  var file;
  if (req.url === '/video.ogg') {
    res.writeHead(200, {
      'Content-Type': 'video/ogg'
    });
    file = GrowingFile.open(FILENAME);
    file.pipe(res);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(1337);
var rq = require('request');
var http = require('http');

var server = http.createServer(function (request, response) {
  rq.get('http://techslides.com/demos/sample-videos/small.mp4').pipe(response);
});

server.listen(8000);
console.log('Server running on port ' + 8000);

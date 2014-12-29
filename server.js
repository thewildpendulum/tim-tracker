var static = require('node-static');
var dir    = './www';
var port   = 8080;
var file   = new static.Server(dir);

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(port);

console.log('Serving ' + dir + ' on ' + port);

'use strict';

var fs = require('fs'),
    restify = require('restify'),
    packageConfig = require('./package.json'),
    port = process.env.PORT || '8080',
    server = restify.createServer({name: 'Directory Reader'});

function getPath(request, response, next) {
    var path = process.env.DIRECTORY_READER_PATH || '.',
        files;

    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        response.send(200, files);
    } else {
        response.send(500, {error: 'path does not exist'});
    }
}

function healthcheck(request, response, next) {
    response.send(200, {'package': packageConfig, env: process.env});
}


server.get('/api/latest/htdocs', getPath);
server.head('/api/latest/htdocs', getPath);

server.get('/_healthcheck', healthcheck);

server.listen(port, function () {
    console.log('%s listening at %s', server.name, server.url);
});

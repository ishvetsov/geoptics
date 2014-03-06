var express = require('express'),
    service = require('./server/service');

var server = express();

// server.use(express.bodyParser());

server.use(express.json());
server.use(express.urlencoded());
server.use(express.logger());
server.use('/', express.static(__dirname));

service.addUrls(server);

server.listen(3000);
console.log('Release version: http://localhost:3000/');
console.log('Dev version: http://localhost:3000/src/');

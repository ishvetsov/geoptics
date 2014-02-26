var express = require('express'),
    utils = require('./server/utils');

var data = utils.loadData('../data/');

var server = express();

server.use('/', express.static(__dirname));

// psensors
server.get('/psensors/:id', function (req, res) {
    res.json(data.psensors[0]);
});
server.post('/psensors', function (req, res) {

});
server.put('/psensors', function (req, res) {

});
server.delete('/psensors', function (req, res) {

});

// tsensors
server.get('/tsensors/:id', function (req, res) {
    res.json(data.tsensors[0]);
});
server.post('/tsensors', function (req, res) {

});
server.put('/tsensors', function (req, res) {

});
server.delete('/tsensors', function (req, res) {

});

// boreholes
server.get('/boreholes/noattached', function (req, res) {
    res.json(data.noAttached);
});
server.get('/boreholes/:id', function (req, res) {
    res.json(data.boreholes[0]);
});
server.post('/boreholes', function (req, res) {

});
server.put('/boreholes', function (req, res) {

});
server.delete('/boreholes', function (req, res) {

});
server.get('/boreholes/:id/psensors', function (req, res) {
    res.json(data.psensors);
});
server.get('/boreholes/:id/tsensors', function (req, res) {
    res.json(data.tsensors);
});

// clusters
server.get('/clusters/:id', function (req, res) {
    res.json(data.clusters[0]);
});
server.post('/clusters', function (req, res) {

});
server.put('/clusters', function (req, res) {

});
server.delete('/clusters', function (req, res) {

});
server.get('/clusters/:id/boreholes', function (req, res) {
    res.json(data.boreholes);
});

// fields
server.get('/fields', function (req, res) {
    res.json(data.fields);
});
server.get('/fields/:id', function (req, res) {
    res.json(data.fields[0]);
});
server.post('/fields', function (req, res) {

});
server.put('/fields', function (req, res) {

});
server.delete('/fields', function (req, res) {

});
server.get('/fields/:id/clusters', function (req, res) {
    res.json(data.clusters);
});

// users
server.get('/users/:id', function (req, res) {
    res.json(data.users[0]);
});
server.get('/users', function (req, res) {
    res.json(data.users);
});
server.post('/users', function (req, res) {

});
server.put('/users', function (req, res) {

});
server.delete('/users', function (req, res) {

});
server.get('/users/:id/usergroups', function (req, res) {
    res.json(data.groupsOfUser);
});
server.get('/users/:id/sensorssets', function (req, res) {
    res.json(data.sensorsSets);
});

// usergroups
server.get('/usergroups/:id', function (req, res) {
    res.json(data.usergroups[0]);
});
server.post('/usergroups', function (req, res) {

});
server.put('/usergroups', function (req, res) {

});
server.delete('/usergroups', function (req, res) {

});
server.get('/usergroups', function (req, res) {
    res.json(data.usergroups);
});
server.get('/usergroups/:id/users', function (req, res) {
    res.json(data.users);
});

server.listen(3000);
console.log('Release version: http://localhost:3000/');
console.log('Dev version: http://localhost:3000/src/');

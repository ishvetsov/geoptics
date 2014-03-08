var fs = require('fs'),
    path = require('path'),
    _ = require('underscore');

var module = module.exports;

function loadData(dataBaseUrl) {
    var data = {};

    function loadFile(file) {
        var fname = file.split('.')[0],
            parts = fname.split('_');

        for (var i = 1; i < parts.length; i++) {
            parts[i] = parts[i][0].toUpperCase() + parts[i].substring(1);
        }
        var name = parts.join('');

        data[name] = require(dataBaseUrl + file);
    }

    fs.readdirSync(path.resolve(__dirname, dataBaseUrl))
        .forEach(loadFile);

    return data;
}

var extenders = [
    require('./urls/fields'),
    require('./urls/boreholes'),
    require('./urls/clusters'),
    require('./urls/usergroups'),
    require('./urls/users'),
    require('./urls/login'),
    require('./urls/sensorssets')
];

module.addUrls = function (server) {
    var data = loadData('../data/');

    extenders.forEach(function (e) {
        e.extend(server, data);
    });
};

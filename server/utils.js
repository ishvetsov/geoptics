 var fs = require('fs'),
    path = require('path');

var utils = module.exports;

utils.loadData = function (dataBaseUrl) {
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
};

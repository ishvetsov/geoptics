'use strict';

var fs = require('fs'),
    path = require('path'),
    _ = require('underscore');

var getAddMethod = function (dest) {
    var method = _.isArray(dest)
        ? function (value) { dest.push(value); }
        : function (value, key) { dest[key] = value; };

    return method;
};

module.exports.loadData = function (dataPath, data) {
    var add = getAddMethod(data);

    function loadFile (file) {
        var fname = file.split('.')[0],
            parts = fname.split('_');

        for (var i = 1, len = parts.length; i < len; i++) {
            parts[i] = parts[i][0].toUpperCase() + parts[i].substring(1);
        }

        add(require(dataPath + file), parts.join(''));
    }

    fs.readdirSync(path.resolve(__dirname, dataPath))
        .forEach(loadFile);

    return data;
};

module.exports.getUrlTemplates = function (base) {
    return {
        base: '/' + base,
        spec: function (nested) {
            var spec = this.base + '/:id';

            return nested ? spec + '/' + nested : spec;
        }
    };
};

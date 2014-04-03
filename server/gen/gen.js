'use strict';

var core = require('./parsers/core'),
    utils = require('../utils'),
    _ = require('underscore');

var templates = utils.loadData('./data_templates/', {});

var process = function (name) { return core(templates[name]); };

module.exports.get = function (name, min, max) {
    return min
        ? _.times(_.random(min, max), function () { return process(name); })
        : process(name);
};

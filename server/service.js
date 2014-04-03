'use strict';

var utils = require('./utils');

var extenders = utils.loadData('./extenders/', []);

module.exports.addUrls = function (server) {
    extenders.forEach(function (e) { e.extend(server); });
};

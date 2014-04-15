'use strict';

var handlers = require('../handlers'),
    utils = require('../utils');

module.exports.extend = function (server) {
    var url = utils.getUrlTemplates('points');

    server.get(url.spec(), handlers.getGen('boreholePoint'));
    server.put(url.spec(), handlers.body);
    server.delete(url.spec(), handlers.empty);
};

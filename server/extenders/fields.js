'use strict';

var handlers = require('../handlers'),
    utils = require('../utils');

module.exports.extend = function (server) {
    var url = utils.getUrlTemplates('fields');

    server.get(url.base, handlers.getGen('field', 5, 7));
    server.get(url.spec(), handlers.getGen('field'));
    server.put(url.spec(), handlers.body);
    server.post(url.base, handlers.body);
    server.delete(url.spec(), handlers.empty);

    server.get(url.spec('clusters'), handlers.getGen('cluster', 3, 4));
    server.post(url.spec('clusters'), handlers.body);
};

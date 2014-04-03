'use strict';

var handlers = require('../handlers'),
    utils = require('../utils');

module.exports.extend = function (server) {
    var url = utils.getUrlTemplates('clusters');

    server.get(url.spec(), handlers.getGen('cluster'));
    server.put(url.spec(), handlers.body);
    server.delete(url.spec(), handlers.empty);

    server.get(url.spec('boreholes'), handlers.getGen('borehole', 3, 6));
};

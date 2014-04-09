'use strict';

var handlers = require('../handlers'),
    utils = require('../utils');

module.exports.extend = function (server) {
    var url = utils.getUrlTemplates('boreholepointpresets');

    server.get(url.base, handlers.getGen('boreholePointPreset', 2, 4));
    server.get(url.spec(), handlers.getGen('boreholePointPreset'));
    server.put(url.spec(), handlers.body);
    server.delete(url.spec(), handlers.empty);
    server.post(url.base, handlers.body);
};

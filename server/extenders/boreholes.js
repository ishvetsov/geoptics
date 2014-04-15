'use strict';

var handlers = require('../handlers'),
    utils = require('../utils'),
    gen = require('../gen/gen');

module.exports.extend = function (server) {
    var url = utils.getUrlTemplates('boreholes');

    server.get(url.base, function (req, res) {
        req.query.noattached === 'true' && res.json(gen.get('borehole', 3, 6));
    });

    server.get(url.spec(), handlers.getGen('borehole'));
    server.put(url.spec(), handlers.body);
    server.delete(url.spec(), handlers.empty);

    server.get(url.spec('psensors'), handlers.getGen('psensor', 3, 6));
    server.get(url.spec('tsensors'), handlers.getGen('tsensor', 3, 6));
    server.get(url.spec('psensors/:number'), handlers.getGen('psensor'));
    server.get(url.spec('tsensors/:number'), handlers.getGen('tsensor'));
    server.put(url.spec('psensors/:number'), handlers.body);
    server.put(url.spec('tsensors/:number'), handlers.body);

    server.post(url.spec('points'), handlers.body);
    server.get(url.spec('points'), handlers.getGen('boreholePoint', 1, 2));
};

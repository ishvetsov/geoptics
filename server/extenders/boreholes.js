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

    server.get(url.spec('psensors'), handlers.getGen('psensor', 3, 6));
    server.get(url.spec('tsensors'), handlers.getGen('tsensor', 3, 6));
    server.get(url.spec('psensors/:number'), handlers.getGen('psensor'));
    server.get(url.spec('tsensors/:number'), handlers.getGen('tsensor'));
    server.put(url.spec('psensors/:number'), handlers.body);
    server.put(url.spec('tsensors/:number'), handlers.body);

    server.get(url.spec('moments'), handlers.getGen('moment', 5, 10));
    server.get(url.spec('depths'), handlers.getGen('depth', 5, 10));
    server.get(url.spec('perforations'), handlers.getGen('perforation', 5, 10));
};

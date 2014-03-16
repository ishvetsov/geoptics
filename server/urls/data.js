var gen = require('../gen'),
    _ = require('underscore');

module.exports.extend = function (server, data) {
    var baseUrl = '/data/boreholes';

    server.get(baseUrl + '/:id/psensors/:number', function (req, res) {
        res.json(_.shuffle(data.graphics));
    });

    server.get(baseUrl + '/:id/tsensors/:number', function (req, res) {
        res.json(_.shuffle(data.graphics));
    });
};

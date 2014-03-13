var gen = require('../gen');

module.exports.extend = function (server, data) {
    var baseUrl = '/sensorssets';

    server.post(baseUrl + '?', function (req, res) {
        res.json(req.body);
    });

    server.get(baseUrl + '/:id/fields', function (req, res) {
        res.json(data.fieldsOfSensorsSet);
    });

    server.get(baseUrl + '/:id', function (req, res) {
        
    });
};

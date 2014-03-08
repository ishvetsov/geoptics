var gen = require('../gen');

module.exports.extend = function (server, data) {
    var baseUrl = '/sensorssets';

    server.get(baseUrl + '/:id/fields', function (req, res) {
        res.json(data.fieldsOfSensorsSet);
    });
};

var gen = require('../gen');

module.exports.extend = function (server, data) {
    var baseUrl = '/users';

    server.get(baseUrl, function (req, res) {
        res.json(gen.some(data.user, 30, 40, 'id'));
    });

    server.post(baseUrl, function (req, res) {
        res.json(req.body);
    });

    server.put(baseUrl + '/:id', function (req, res) {
        res.json(req.body);
    });

    server.get(baseUrl + '/:id', function (req, res) {
        res.json(gen.traverse(data.user, 'id', req.params.id));
    });

    server.get(baseUrl + '/:id/usergroups', function (req, res) {
        res.json(gen.some(data.usergroup, 2, 4, 'id'));
    });

    server.get(baseUrl + '/:id/sensorssets', function (req, res) {
        res.json(gen.some(data.sensorsSets, 2, 4, 'id'));
    });

    server.post(baseUrl + '/:id/sensorssets', function (req, res) {
        res.json(req.body);
    });

    server.delete(baseUrl, function (req, res) {});
};

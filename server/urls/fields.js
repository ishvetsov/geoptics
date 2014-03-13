var gen = require('../gen');

module.exports.extend = function (server, data) {
    var baseUrl = '/fields';

    server.get(baseUrl, function (req, res) {
        res.json(gen.some(data.field, 8, 10, 'id'));
    });

    server.get(baseUrl + '/:id', function (req, res) {
        res.json(gen.traverse(data.field, 'id', req.params.id));
    });

    server.get(baseUrl + '/:id/clusters', function (req, res) {
        res.json(gen.some(data.cluster, 5, 8, 'id'));
    });

    server.put(baseUrl + '/:id', function (req, res) {
        res.json(req.body);
    });

    server.post(baseUrl, function (req, res) {
        res.json(req.body);
    });

    server.delete(baseUrl + '/:id', function (req, res) {
        res.json({});
    });
};

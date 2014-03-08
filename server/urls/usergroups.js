var gen = require('../gen');

module.exports.extend = function (server, data) {
    var baseUrl = '/usergroups';

    server.get(baseUrl, function (req, res) {
        res.json(gen.some(data.usergroup, 3, 5, 'id'));
    });

    server.get(baseUrl + '/:id', function (req, res) {
        res.json(gen.traverse(data.usergroup, 'id', req.params.id));
    });

    server.get(baseUrl + '/:id/users', function (req, res) {
        res.json(gen.some(data.user, 3, 10, 'id'));
    });

    server.put(baseUrl + '/:id', function (req, res) {
        res.json(req.body);
    });

    server.delete(baseUrl + '/:id', function (req, res) {});
    server.post(baseUrl, function (req, res) {});
};

var gen = require('../gen');

module.exports.extend = function (server, data) {
    var baseUrl = '/clusters';

    server.get(baseUrl + '/:id', function (req, res) {
        res.json(gen.traverse(data.cluster, 'id', req.params.id));
    });

    server.get(baseUrl + '/:id/boreholes', function (req, res) {
        res.json(gen.some(data.borehole, 3, 10, 'id'));
    });

    server.put(baseUrl + '/:id', function (req, res) {
        res.json(req.body);
    });

    server.delete(baseUrl + '/:id', function (req, res) {
        res.json({});
    });

    // server.post(baseUrl + '?', function (req, res) {
    //     res.json(req.body);
    // });
};

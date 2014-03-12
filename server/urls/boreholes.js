var gen = require('../gen');

module.exports.extend = function (server, data) {
    var baseUrl = '/boreholes';

    var noattached = gen.some(data.noattached, 5, 10, 'id');
    server.get(baseUrl + '?', function (req, res) {
        if (req.query.noattached && req.query.noattached === 'true') {
            res.json(noattached);
        }
    });

    server.get(baseUrl + '/:id', function (req, res) {
        res.json(gen.traverse(data.borehole, 'id', req.params.id));
    });
    
    server.get(baseUrl + '/:id/psensors', function (req, res) {
        res.json(gen.some(data.psensor, 3, 10, 'channelNumber'));
    });

    server.get(baseUrl + '/:id/tsensors', function (req, res) {
        res.json(gen.some(data.tsensor, 3, 10, 'channelNumber'));
    });

    server.get(baseUrl + '/:id/psensors/:number', function (req, res) {
        res.json(gen.traverse(data.psensor, 'channelNumber', req.params.number));
    });

    server.get(baseUrl + '/:id/tsensors/:number', function (req, res) {
        res.json(gen.traverse(data.tsensor, 'channelNumber', req.params.number));
    });

    server.get(baseUrl + '/:id/moments', function (req, res) {
        res.json(gen.some(data.moment, 5, 10, 'id'));
    });

    server.get(baseUrl + '/:id/depths', function (req, res) {
        res.json(gen.some(data.depth, 5, 10, 'id'));
    });

    server.get(baseUrl + '/:id/perforations', function (req, res) {
        res.json(gen.some(data.perforation, 5, 10, 'id'));
    });

    server.put(baseUrl + '/:id', function (req, res) {
        res.json(req.body);
    });

    server.put(baseUrl + '/:id/psensors/:number', function (req, res) {
        res.json(req.body);
    });

    server.put(baseUrl + '/:id/tsensors/:number', function (req, res) {
        res.json(req.body);
    });
};

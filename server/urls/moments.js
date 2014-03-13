var gen = require('../gen');

module.exports.extend = function (server, data) {
    server.post('/moments?', function (req, res) {
        res.json(req.body);
    });

    server.get('/moments/:id', function (req, res) {
        res.json(gen.traverse(data.moment, 'id', req.params.id));
    });

    server.put('/moments/:id', function (req, res) {
        res.json(req.body);
    });

    server.delete('/moments/:id', function (req, res) {
        res.json({});
    });
};

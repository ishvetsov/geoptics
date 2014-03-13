var gen = require('../gen');

module.exports.extend = function (server, data) {
    server.post('/depths?', function (req, res) {
        res.json(req.body);
    });

    server.get('/depths/:id', function (req, res) {
        res.json(gen.traverse(data.depth, 'id', req.params.id));
    });

    server.put('/depths/:id', function (req, res) {
        res.json(req.body);
    });

    server.delete('/depths/:id', function (req, res) {
        res.json({});
    });
};

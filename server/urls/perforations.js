var gen = require('../gen');

module.exports.extend = function (server, data) {
    server.post('/perforations?', function (req, res) {
        res.json(req.body);
    });

    server.get('/perforations/:id', function (req, res) {
        res.json(gen.traverse(data.perforation, 'id', req.params.id));
    });

    server.put('/perforations/:id', function (req, res) {
        res.json(req.body);
    });

    server.delete('/perforations/:id', function (req, res) {
        res.json({});
    });
};

var gen = require('../gen');

module.exports.extend = function (server, data) {
    var baseUrl = '/login';

    server.post(baseUrl, function (req, res) {
        res.json(gen.traverse(data.user, 'id', 0));
    });
};

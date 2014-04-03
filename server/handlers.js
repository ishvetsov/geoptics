var gen = require('./gen/gen');

module.exports.empty = function (req, res) {
    res.json({});
};

module.exports.body = function (req, res) {
    res.json(req.body);
};

module.exports.getGen = function (name, min, max) {
    return function (req, res) {
        res.json(gen.get(name, min, max));
    };
};

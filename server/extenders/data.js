'use strict';

var handlers = require('../handlers'),
    utils = require('../utils');

module.exports.extend = function (server) {
    var url = utils.getUrlTemplates('data/boreholes');

    server.get(url.spec('psensors/:number'), handlers.getGen('dataPsensors'));
    server.get(url.spec('tsensors/:number'), handlers.getGen('dataTsensors'));
};

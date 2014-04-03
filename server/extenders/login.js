'use strict';

var handlers = require('../handlers'),
    utils = require('../utils');

module.exports.extend = function (server) {
    var url = utils.getUrlTemplates('login');

    server.post(url.base, handlers.getGen('user'));
};

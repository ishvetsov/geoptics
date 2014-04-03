'use strict';

var handlers = require('../handlers'),
    utils = require('../utils');

module.exports.extend = function (server) {
    var url = utils.getUrlTemplates('users');

    server.get(url.base, handlers.getGen('user', 10, 20));
    server.get(url.spec(), handlers.getGen('user'));
    server.put(url.spec(), handlers.body);
    server.post(url.base, handlers.body);
    server.delete(url.base, handlers.empty);

    server.get(url.spec('sensorssets'), handlers.getGen('sensorsSet', 2, 4));
    server.get(url.spec('usergroups'), handlers.getGen('usergroup', 1, 3));
};

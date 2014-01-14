/* global _ */

define(function (require) {
    'use strict';

    var User = require('entities/user.entity'),
        Config = require('configs/config');

    var AdminUsersCollection = User.Collection.extend({
        url: Config.rest.adminUsers
    });

    return AdminUsersCollection;
});

/* global _ */

define(function (require) {
    'use strict';

    var User = require('entities/user.entity'),
        Config = require('configs/config');

    var AdminUserModel = User.Model.extend({
        urlRoot: Config.rest.adminUser
    });

    return AdminUserModel;
});

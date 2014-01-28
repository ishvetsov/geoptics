/* global _ */

define(function (require) {
    'use strict';

    var User = require('entities/user.entity'),
        AppConfig = require('configs/app.config');

    var AdminUserCollection = User.Collection.extend({
        url: AppConfig.rest.adminUsers
    });

    return AdminUserCollection;
});

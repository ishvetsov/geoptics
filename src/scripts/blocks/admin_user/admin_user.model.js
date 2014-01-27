/* global _ */

define(function (require) {
    'use strict';

    var User = require('entities/user.entity'),
        AppConfig = require('configs/app.config');

    var AdminUserModel = User.Model.extend({
        urlRoot: AppConfig.rest.adminUser
    });

    return AdminUserModel;
});

/* global Backbone */

define(function (require) {
    'use strict';

    var Bus = require('bus'),
        authLayout = require('./auth.layout'),
        loginController = require('blocks/login/login.controller');

    authLayout.on('show', function () {
        authLayout.container.show(loginController.getInstance());
    });

    return {
        check: function () {
            if (loginController.isAuthorized()) {
                require('bundles/common/common')();
            }
        }
    };
});

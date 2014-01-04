/* global Backbone */

define(function (require) {
    'use strict';

    var Cookie = require('jquery.cookie'),
        guestLayout = require('./guest.layout'),
        sessionController = require('blocks/session/session.controller'),
        loginController = require('blocks/login/login.controller');

    guestLayout.on('show', function () {
        guestLayout.container.show(loginController.getInstance());
    });

    sessionController.on('session:out', function () {
        require('./guest')();
    });

    loginController.on('login:success', function () {
        require('bundles/common/common')();
    });

    return {
        check: function () {
            if (sessionController.isAuthorized()) {
                require('bundles/common/common')();
            }
        }
    };
});

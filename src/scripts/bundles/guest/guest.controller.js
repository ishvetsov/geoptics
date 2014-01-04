/* global Backbone */

define(function (require) {
    'use strict';

    var
        Cookie = require('jquery.cookie'),
        Bus = require('bus'),
        guestLayout = require('./guest.layout'),
        loginController = require('blocks/login/login.controller');

    guestLayout.on('show', function () {
        guestLayout.container.show(loginController.getInstance());
    });

    Bus.events.on('logout', function () {
        loginController.logout();
        require('./guest')();
    });

    Bus.events.on('login:success', function () {
        require('bundles/common/common')();
    });

    return {
        check: function () {
            if (loginController.isAuthorized()) {
                require('bundles/common/common')();
            }
        }
    };
});

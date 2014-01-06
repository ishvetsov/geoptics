/* global Backbone */

define(function (require) {
    'use strict';

    var guestLayout = require('./guest.layout'),
        sessionController = require('blocks/session/session.controller'),
        loginController = require('blocks/login/login.controller');

    var handlers = {
        check: function () {
            var accessLevel = sessionController.getAccessLevel();

            accessLevel > 0 && require('bundles/common/common').init('graphics');
            accessLevel > 1 && require('bundles/admin/admin').init();
        }
    };

    guestLayout.on('show', function () {
        guestLayout.container.show(loginController.getInstance());
    });

    sessionController.on('session:out', function () {
        require('./guest').init();
    });

    sessionController.on('session:in', function () {
        handlers.check();
    });

    return {
        init: function () {
            return handlers;
        }
    };
});

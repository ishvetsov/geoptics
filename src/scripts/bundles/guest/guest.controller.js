/* global Backbone */

define(function (require) {
    'use strict';

    var guestLayout = require('./guest.layout'),
        sessionController = require('blocks/session/session.controller'),
        loginController = require('blocks/login/login.controller');

    var CommonBundle = require('bundles/common/common');

    var handlers = {
        check: function () {
            sessionController.getAccessLevel() > 0 && CommonBundle.init();
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

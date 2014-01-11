/* global Backbone */

define(function (require) {
    'use strict';

    var GuestLayout = require('./guest.layout'),
        sessionController = require('blocks/session/session.controller'),
        loginController = require('blocks/login/login.controller');

    var CommonBundle = require('bundles/common/common');

    var guestLayout = new GuestLayout();

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
        handlers:handlers,
        layout: guestLayout
    };
});

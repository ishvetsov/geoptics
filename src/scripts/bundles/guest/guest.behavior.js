/* global Backbone */

define(function (require) {
    'use strict';

    var SessionBlock = require('blocks/session/session.block'),
        LoginBlock = require('blocks/login/login.block'),
        CommonBundle = require('bundles/common/common.bundle'),

        GuestLayout = require('./guest.layout');

    var sessionBlock = SessionBlock.getInstance(),
        loginBlock = LoginBlock.init().getInstance(),
        commonBundle = CommonBundle.getInstance(),
        guestLayout = new GuestLayout();

    var handlers = {
        check: function () {
            sessionBlock.getAccessLevel() > 0 && commonBundle.init();
        }
    };

    guestLayout.on('show', function () {
        guestLayout.container.show(loginBlock.getInstanceView());
    });

    sessionBlock.on('session:out', function () {
        require('./guest.bundle').init();
    });

    sessionBlock.on('session:in', function () {
        handlers.check();
    });

    return {
        handlers:handlers,
        layout: guestLayout
    };
});

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
        // TODO: Выпилить отсюда require, щас не будет работать,
        // потому что предположительно существует циклическая зависимость
        // GuestBundle и GuestBehavior.
        // Найти способ не подгружать модуль GuestBundle в этом модуле,
        // т.к. это ошибка проектирования.
        var GuestBundle = require('./guest.bundle');
        GuestBundle.getInstance().init();
    });

    sessionBlock.on('session:in', function () {
        handlers.check();
    });

    return {
        handlers:handlers,
        layout: guestLayout
    };
});

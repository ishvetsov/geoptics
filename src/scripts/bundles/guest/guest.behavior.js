/* global Backbone */

define(function (require) {
    'use strict';

    var Utils = require('core/utils'),
        CommonBundle = require('bundles/common/common.bundle'),
        GuestLayout = require('./guest.layout');

    var Blocks = {
        Session: require('blocks/session/session.block'),
        Login: require('blocks/login/login.block')
    };

    var b = Utils.getInstances(Blocks),
        commonBundle = CommonBundle.getInstance(),
        guestLayout = new GuestLayout();

    var initialize = function () {
        b.session.init();
        b.login.init();
    };

    guestLayout.on('show', function () {
        guestLayout.container.show(b.login.getViewInstance());
    });

    b.session.on('session:out', function () {
        // TODO: Выпилить отсюда require, щас не будет работать,
        // потому что предположительно существует циклическая зависимость
        // GuestBundle и GuestBehavior.
        // Найти способ не подгружать модуль GuestBundle в этом модуле,
        // т.к. это ошибка проектирования.
        var GuestBundle = require('./guest.bundle');
        GuestBundle.getInstance().init();
    });

    b.session.on('session:in', function () {
        handlers.check();
    });

    var handlers = {
        check: function () {
            b.session.getAccessLevel() > 0 && commonBundle.init();
        }
    };

    return {
        handlers:handlers,
        layout: guestLayout,
        init: initialize
    };
});

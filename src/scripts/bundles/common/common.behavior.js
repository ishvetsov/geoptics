/* global Backbone, _ */

define(function (require) {
    'use strict';

    var NavigationBlock = require('blocks/navigation/navigation.block'),
        SessionBlock = require('blocks/session/session.block'),
        AdminBundle = require('bundles/admin/admin.bundle'),
        UserBundle = require('bundles/user/user.bundle'),

        CommonLayout = require('./common.layout');

    var commonLayout = new CommonLayout(),
        sessionBlock = SessionBlock.getInstance(),
        navigationBlock = NavigationBlock.getInstance(),
        adminBundle = AdminBundle.getInstance(),
        userBundle = UserBundle.getInstance();

    adminBundle.on('state:active', function (layout) {
        commonLayout.body.show(layout);
    });

    userBundle.on('state:active', function (layout) {
        commonLayout.body.show(layout);
    });

    commonLayout.on('show', function () {
        commonLayout.header.show(navigationBlock.getInstanceView());
    });

    var initialize = function () {
        navigationBlock.init();
        userBundle.init();
        sessionBlock.getAccessLevel() > 1 && adminBundle.init();
    };

    var handlers = {
        notFound: function () {
            console.log('not found');
        }
    };

    return {
        init: initialize,
        handlers: handlers,
        layout: commonLayout
    };
});

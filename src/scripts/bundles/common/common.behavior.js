/* global Backbone, _ */

define(function (require) {
    'use strict';

    var NavigationBlock = require('blocks/navigation/navigation.block'),
        SessionBlock = require('blocks/session/session.block'),
        AdminBundle = require('bundles/admin/admin'),
        UserBundle = require('bundles/user/user'),

        CommonLayout = require('./common.layout');

    var commonLayout = new CommonLayout(),
        sessionBlock = SessionBlock.getInstance(),
        navigationBlock = NavigationBlock.getInstance();

    AdminBundle.on('state:active', function (layout) {
        commonLayout.body.show(layout);
    });

    UserBundle.on('state:active', function (layout) {
        commonLayout.body.show(layout);
    });

    commonLayout.on('show', function () {
        commonLayout.header.show(navigationBlock.getInstanceView());
    });

    var initialize = function () {
        navigationBlock.init();
        UserBundle.init();
        sessionBlock.getAccessLevel() > 1 && AdminBundle.init();
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

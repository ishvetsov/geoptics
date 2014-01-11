/* global Backbone, _ */

define(function (require) {
    'use strict';

    var NavigationController = require('blocks/navigation/navigation.controller'),
        SessionController = require('blocks/session/session.controller'),

        AdminBundle = require('bundles/admin/admin'),
        UserBundle = require('bundles/user/user'),

        CommonLayout = require('./common.layout');

    var commonLayout = new CommonLayout();

    AdminBundle.on('state:active', function (layout) {
        commonLayout.body.show(layout);
    });

    UserBundle.on('state:active', function (layout) {
        commonLayout.body.show(layout);
    });

    commonLayout.on('show', function () {
        commonLayout.header.show(NavigationController.getInstance());
    });

    var initialize = function () {
        NavigationController.init();
        UserBundle.init();
        SessionController.getAccessLevel() > 1 && AdminBundle.init();
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

/* global Backbone, _ */

define(function (require) {
    'use strict';

    var NavigationBlock = require('blocks/navigation/navigation.block'),
        SessionBlock = require('blocks/session/session.block'),
        adminBundle = require('bundles/admin/admin'),
        userBundle = require('bundles/user/user'),

        commonLayout = require('./common.layout');

    var sessionBlock = SessionBlock.getInstance(),
        navigationBlock = NavigationBlock.getInstance(),
        bodyShow = _.bind(commonLayout.body.show, commonLayout.body);

    adminBundle.on('state:active', bodyShow);
    userBundle.on('state:active', bodyShow);

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
        handlers: handlers
    };
});

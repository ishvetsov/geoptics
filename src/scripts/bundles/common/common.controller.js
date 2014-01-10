/* global Backbone, _ */

define(function (require) {
    'use strict';

    var commonLayout = require('./common.layout'),
        navigationController = require('blocks/navigation/navigation.controller'),
        sessionController = require('blocks/session/session.controller');

    var adminBundle = require('bundles/admin/admin'),
        userBundle = require('bundles/user/user');

    var bodyShow = _.bind(commonLayout.body.show, commonLayout.body);

    adminBundle.on('state:active', bodyShow);
    userBundle.on('state:active', bodyShow);

    commonLayout.on('show', function () {
        commonLayout.header.show(navigationController.getInstance());
    });

    var initialize = function () {
        navigationController.init();
        userBundle.init();
        sessionController.getAccessLevel() > 1 && adminBundle.init();
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

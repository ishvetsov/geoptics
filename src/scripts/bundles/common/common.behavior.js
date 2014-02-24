/* global Backbone, _ */

define(function (require) {
    'use strict';

    var Utils = require('core/utils'),
        CommonLayout = require('./common.layout');

    var Blocks = {
            Navigation: require('blocks/navigation/navigation.block'),
            Session: require('blocks/session/session.block')
        },
        Bundles = {
            Admin: require('bundles/admin/admin.bundle'),
            Prime: require('bundles/prime/prime.bundle')
        };

    var blocks = Utils.getInstances(Blocks),
        bundles = Utils.getInstances(Bundles),
        commonLayout = new CommonLayout();

    bundles.admin.on('state:active', function (layout) {
        commonLayout.body.show(layout);
    });

    bundles.prime.on('state:active', function (layout) {
        commonLayout.body.show(layout);
    });

    commonLayout.on('show', function () {
        commonLayout.header.show(blocks.navigation.getViewInstance());
    });

    var initialize = function () {
        blocks.navigation.init();
        bundles.prime.init();

        blocks.session.getAccessLevel() > 1 && bundles.admin.init();
    };

    var handlers = {
        notFound: function () {
            Backbone.history.navigate('#graphics', {trigger: true});
            console.log('not found');
        }
    };

    return {
        init: initialize,
        handlers: handlers,
        layout: commonLayout
    };
});

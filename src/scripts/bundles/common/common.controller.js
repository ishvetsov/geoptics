/* global Backbone */

define(function (require) {
    'use strict';

    var commonLayout = require('./common.layout'),
        navigationController = require('blocks/navigation/navigation.controller');

    commonLayout.on('show', function () {
        commonLayout.header.show(navigationController.getInstance());
    });

    var handlers = {
        notFound: function () {
            Backbone.history.navigate('graphics');
            this.graphics();
        },

        journal: function () {
            navigationController.active('journal');
        },

        graphics: function () {
            navigationController.active('graphics');
        }
    };

    return {
        init: function () {
            navigationController.init();
            return handlers;
        }
    };
});

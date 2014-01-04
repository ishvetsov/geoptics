/* global Backbone */

define(function (require) {
    'use strict';

    var Bus = require('bus'),
        commonLayout = require('./common.layout'),
        navigationController = require('blocks/navigation/navigation.controller');

    commonLayout.on('show', function () {
        commonLayout.header.show(navigationController.getInstance());
    });

    var handlers = {
        notFound: function () {
            console.log('notFound');
            Backbone.history.navigate('graphics');
            this.graphics();
        },

        journal: function () {
            navigationController
                .getInstance()
                .setActiveItem('journal');
            Bus.events.trigger('select:journal');
        },

        graphics: function () {
            navigationController
                .getInstance()
                .setActiveItem('graphics');
            Bus.events.trigger('select:graphics');
        },

        admin: function () {
            navigationController
                .getInstance()
                .setActiveItem('admin');
            Bus.events.trigger('select:admin');
        }
    };

    return function () {
        navigationController.init();
        return handlers;
    };
});

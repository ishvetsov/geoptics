/* global Backbone */

define(function (require) {
    'use strict';

    var navigationController = require('blocks/navigation/navigation.controller');

    var handlers = {
        notFound: function () {
            console.log('not found');
        },

        index: function () {
            Backbone.history.navigate('graphics');
            this.graphics();
        },

        journal: function () {
            navigationController
                .getInstance()
                .activeItem('journal');
        },

        graphics: function () {
            navigationController
                .getInstance()
                .activeItem('graphics');
        }
    };

    return {
        init: function () {
            navigationController.render();

            return handlers;
        }
    };
});

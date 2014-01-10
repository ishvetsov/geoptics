/* global Backbone */

define(function (require) {
    'use strict';

    var navigationController = require('blocks/navigation/navigation.controller');

    var handlers = {
        journal: function () {
            navigationController.active('journal');
        },

        graphics: function () {
            navigationController.active('graphics');
        }
    };

    return {
        handlers: handlers
    };
});

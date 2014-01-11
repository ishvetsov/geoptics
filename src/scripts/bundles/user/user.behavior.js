/* global Backbone */

define(function (require) {
    'use strict';

    var navigationController = require('blocks/navigation/navigation.controller');
    var UserLayout = require('./user.layout');

    var userLayout = new UserLayout();

    var handlers = {
        journal: function () {
            navigationController.active('journal');
        },

        graphics: function () {
            navigationController.active('graphics');
        }
    };

    return {
        handlers: handlers,
        layout: userLayout
    };
});

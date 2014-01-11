/* global Backbone */

define(function (require) {
    'use strict';

    var NavigationBlock = require('blocks/navigation/navigation.block'),

        UserLayout = require('./user.layout');

    var navigationBlock = NavigationBlock.getInstance(),
        userLayout = new UserLayout();

    var handlers = {
        journal: function () {
            navigationBlock.activateItem('journal');
        },

        graphics: function () {
            navigationBlock.activateItem('graphics');
        }
    };

    return {
        handlers: handlers,
        layout: userLayout
    };
});

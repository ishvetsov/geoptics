/* global Backbone */

define(function (require) {
    'use strict';

    var NavigationBlock = require('blocks/navigation/navigation.block');

    var navigationBlock = NavigationBlock.getInstance();

    var handlers = {
        journal: function () {
            navigationBlock.activateItem('journal');
        },

        graphics: function () {
            navigationBlock.activateItem('graphics');
        }
    };

    return {
        handlers: handlers
    };
});

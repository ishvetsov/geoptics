/* global Backbone */

define(function (require) {
    'use strict';

    var NavigationBlock = require('blocks/navigation/navigation.block');

    var navigationBlock = NavigationBlock.getInstance();

    var handlers = {
        admin: function () {
            navigationBlock.activateItem('admin');
        }
    };

    return {
        handlers: handlers
    };
});

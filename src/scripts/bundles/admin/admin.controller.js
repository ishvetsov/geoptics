/* global Backbone */

define(function (require) {
    'use strict';

    var navigationController = require('blocks/navigation/navigation.controller');

    var handlers = {
        admin: function () {
            navigationController.active('admin');
        }
    };

    return {
        init: function () {
            return handlers;
        }
    };
});

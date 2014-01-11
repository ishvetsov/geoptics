/* global Backbone */

define(function (require) {
    'use strict';
    var AdminLayout = require('./admin.layout'),
        navigationController = require('blocks/navigation/navigation.controller');

    var adminLayout = new AdminLayout();

    var handlers = {
        admin: function () {
            navigationController.active('admin');
        }
    };

    return {
        handlers: handlers,
        layout: adminLayout
    };
});

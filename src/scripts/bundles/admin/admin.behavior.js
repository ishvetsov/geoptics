/* global Backbone */

define(function (require) {
    'use strict';

    var NavigationBlock = require('blocks/navigation/navigation.block'),
    
        AdminLayout = require('./admin.layout');

    var navigationBlock = NavigationBlock.getInstance(),
        adminLayout = new AdminLayout();

    var handlers = {
        admin: function () {
            navigationBlock.activateItem('admin');
        }
    };

    return {
        handlers: handlers,
        layout: adminLayout
    };
});

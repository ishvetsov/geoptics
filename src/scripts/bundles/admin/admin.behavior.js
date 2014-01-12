/* global Backbone */

define(function (require) {
    'use strict';

    var NavigationBlock = require('blocks/navigation/navigation.block'),
        AdminNavigationBlock =
            require('blocks/admin_navigation/admin_navigation.block'),
    
        AdminLayout = require('./admin.layout');

    var navigationBlock = NavigationBlock.getInstance(),
        adminNavigationBlock = AdminNavigationBlock.getInstance(),
        adminLayout = new AdminLayout();

    adminLayout.on('show', function () {
        adminLayout.navigation.show(adminNavigationBlock.getInstanceView());
    });

    var initialize = function () {
        adminNavigationBlock.init();
    };

    var handlers = {
        users: function () {
            navigationBlock.activateItem('admin');
            adminNavigationBlock.activateItem('users');
        },

        wells: function () {
            navigationBlock.activateItem('admin');
            adminNavigationBlock.activateItem('wells');
        },

        monitoring: function () {
            navigationBlock.activateItem('admin');
            adminNavigationBlock.activateItem('monitoring');
        }
    };

    return {
        init: initialize,
        handlers: handlers,
        layout: adminLayout
    };
});

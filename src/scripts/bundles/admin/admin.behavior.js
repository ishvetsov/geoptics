/* global Backbone */

define(function (require) {
    'use strict';

    var NavigationBlock = require('blocks/navigation/navigation.block'),
        AdminNavigationBlock = require('blocks/admin_navigation/admin_navigation.block'),
        AdminUsersBlock = require('blocks/admin_users/admin_users.block'),

        AdminLayout = require('./admin.layout');

    var navigationBlock = NavigationBlock.getInstance(),
        adminNavigationBlock = AdminNavigationBlock.getInstance(),
        adminUsersBlock = AdminUsersBlock.getInstance(),
        adminLayout = new AdminLayout();

    adminLayout.on('show', function () {
        adminLayout.navigation.show(adminNavigationBlock.getInstanceView());
    });

    adminUsersBlock.on('user:edit', function (data) {
        console.log('user:edit', data);
    });

    var initialize = function () {
        adminNavigationBlock.init();
        adminUsersBlock.init();
    };

    var handlers = {
        users: function () {
            navigationBlock.activateItem('admin');
            adminNavigationBlock.activateItem('users');

            adminUsersBlock.fetch()
                .then(function () {
                    adminLayout.container.show(adminUsersBlock.getViewInstance());
                });
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

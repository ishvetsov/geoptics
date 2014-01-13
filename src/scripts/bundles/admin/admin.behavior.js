/* global Backbone */

define(function (require) {
    'use strict';

    var NavigationBlock = require('blocks/navigation/navigation.block'),
        AdminNavigationBlock = require('blocks/admin_navigation/admin_navigation.block'),
        AdminUsersBlock = require('blocks/admin_users/admin_users.block'),
        AdminWellsBlock = require('blocks/admin_wells/admin_wells.block'),
        AdminMonitoringBlock = require('blocks/admin_monitoring/admin_monitoring.block'),

        AdminLayout = require('./admin.layout');

    var navigationBlock = NavigationBlock.getInstance(),
        adminNavigationBlock = AdminNavigationBlock.getInstance(),
        adminUsersBlock = AdminUsersBlock.getInstance(),
        adminWellsBlock = AdminWellsBlock.getInstance(),
        adminMonitoringBlock = AdminMonitoringBlock.getInstance(),
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
        adminWellsBlock.init();
        adminMonitoringBlock.init();
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

            // adminWellsBlock.fetch()
            //     .then(function () {
            //         adminLayout.container.show(adminWellsBlock.getInstanceView());
            //     });
            adminLayout.container.show(adminWellsBlock.getViewInstance());
        },

        monitoring: function () {
            navigationBlock.activateItem('admin');
            adminNavigationBlock.activateItem('monitoring');

            adminLayout.container.show(adminMonitoringBlock.getViewInstance());
        }
    };

    return {
        init: initialize,
        handlers: handlers,
        layout: adminLayout
    };
});

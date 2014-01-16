/* global Backbone */

define(function (require) {
    'use strict';

    var NavigationBlock = require('blocks/navigation/navigation.block'),
        AdminUsersBlock = require('blocks/admin_users/admin_users.block'),
        AdminUserBlock = require('blocks/admin_user/admin_user.block'),
        AdminWellsBlock = require('blocks/admin_wells/admin_wells.block'),
        AdminMonitoringBlock = require('blocks/admin_monitoring/admin_monitoring.block'),
        AdminNavigationBlock = require('blocks/admin_navigation/admin_navigation.block'),

        AdminLayout = require('./admin.layout');

    var navigationBlock = NavigationBlock.getInstance(),
        adminUsersBlock = AdminUsersBlock.getInstance(),
        adminUserBlock = AdminUserBlock.getInstance(),
        adminWellsBlock = AdminWellsBlock.getInstance(),
        adminMonitoringBlock = AdminMonitoringBlock.getInstance(),
        adminNavigationBlock = AdminNavigationBlock.getInstance(),
        adminLayout = new AdminLayout();

    adminLayout.on('show', function () {
        adminLayout.navigation.show(adminNavigationBlock.getViewInstance());
        navigationBlock.activateItem('admin');
    });

    var initialize = function () {
        adminNavigationBlock.init();
    };

    var handlers = {
        users: function () {
            adminNavigationBlock.activateItem('users');
            adminUsersBlock.init();
            adminUsersBlock.fetch()
                .then(function () {
                    adminLayout.container.show(adminUsersBlock.getViewInstance());
                });
        },

        user: function (id) {
            adminNavigationBlock.disactivateAll();
            adminUserBlock.init();
            adminUserBlock.fetch(id)
                .then(function () {
                    adminLayout.container.show(adminUserBlock.getViewInstance());
                });
        },

        wells: function () {
            adminNavigationBlock.activateItem('wells');
            adminWellsBlock.init();
            adminWellsBlock.fetch()
                .then(function () {
                    adminLayout.container.show(adminWellsBlock.getViewInstance());
                });
        },

        monitoring: function () {
            adminNavigationBlock.activateItem('monitoring');
            adminMonitoringBlock.init();
            adminLayout.container.show(adminMonitoringBlock.getViewInstance());
        }
    };

    return {
        init: initialize,
        handlers: handlers,
        layout: adminLayout
    };
});

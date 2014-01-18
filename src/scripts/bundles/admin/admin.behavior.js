/* global Backbone */

define(function (require) {
    'use strict';

    var Utils = require('core/utils'),
        AdminLayout = require('./admin.layout');

    var Blocks = {
        Navigation: require('blocks/navigation/navigation.block'),
        AdminUsers: require('blocks/admin_users/admin_users.block'),
        AdminUser: require('blocks/admin_user/admin_user.block'),
        AdminWells: require('blocks/admin_wells/admin_wells.block'),
        AdminMonitoring: require('blocks/admin_monitoring/admin_monitoring.block'),
        AdminNavigation: require('blocks/admin_navigation/admin_navigation.block')
    };

    var b = Utils.getInstances(Blocks),
        adminLayout = new AdminLayout();

    adminLayout.on('show', function () {
        adminLayout.navigation.show(b.adminNavigation.getViewInstance());
        b.navigation.activateItem('admin');
    });

    var initialize = function () {
        b.adminUsers.init();
        b.adminUser.init();
        b.adminWells.init();
        b.adminMonitoring.init();
        b.adminNavigation.init();
    };

    var handlers = {
        users: function () {
            b.adminNavigation.activateItem('users');
            b.adminUsers.fetch()
                .then(function () {
                    adminLayout.container.show(b.adminUsers.getViewInstance());
                });
        },

        user: function (id) {
            b.adminNavigation.disactivateAll();
            b.adminUser.fetch(id)
                .then(function () {
                    adminLayout.container.show(b.adminUser.getViewInstance());
                });
        },

        newUser: function () {
            b.adminNavigation.disactivateAll();
            adminLayout.container.show(
                b.adminUser.resetModel().getViewInstance());
        },

        wells: function () {
            b.adminNavigation.activateItem('wells');
            b.adminWells.fetch()
                .then(function () {
                    adminLayout.container.show(b.adminWells.getViewInstance());
                });
        },

        monitoring: function () {
            b.adminNavigation.activateItem('monitoring');
            adminLayout.container.show(b.adminMonitoring.getViewInstance());
        }
    };

    return {
        init: initialize,
        handlers: handlers,
        layout: adminLayout
    };
});

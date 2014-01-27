/* global Backbone */

define(function (require) {
    'use strict';

    var Utils = require('core/utils'),
        AdminLayout = require('./admin.layout');

    var Blocks = {
        Navigation: require('blocks/navigation/navigation.block'),
        AdminUsers: require('blocks/admin_users/admin_users.block'),
        AdminUser: require('blocks/admin_user/admin_user.block'),
        AdminResources: require('blocks/admin_resources/admin_resources.block'),
        AdminMonitoring: require('blocks/admin_monitoring/admin_monitoring.block'),
        AdminNavigation: require('blocks/admin_navigation/admin_navigation.block')
    };

    var blocks = Utils.getInstances(Blocks),
        adminLayout = new AdminLayout();

    adminLayout.on('show', function () {
        adminLayout.navigation.show(blocks.adminNavigation.getViewInstance());
        blocks.navigation.activateItem('admin');
    });

    var initialize = function () {
        blocks.adminUsers.init();
        blocks.adminUser.init();
        blocks.adminResources.init();
        blocks.adminMonitoring.init();
        blocks.adminNavigation.init();
    };

    var handlers = {
        users: function () {
            blocks.adminNavigation.activateItem('users');
            blocks.adminUsers.fetch()
                .then(function () {
                    adminLayout.container.show(
                        blocks.adminUsers.getViewInstance());
                });
        },

        user: function (id) {
            blocks.adminNavigation.disactivateAll();
            blocks.adminUser.fetch(id)
                .then(function () {
                    adminLayout.container.show(
                        blocks.adminUser.getViewInstance());
                });
        },

        newUser: function () {
            blocks.adminNavigation.disactivateAll();
            adminLayout.container.show(
                blocks.adminUser.resetModel().getViewInstance());
        },

        fields: function () {
            blocks.adminNavigation.activateItem('fields');
            blocks.adminResources.fetch()
                .then(function () {
                    adminLayout.container.show(
                        blocks.adminResources.getViewInstance());
                });
        },

        field: function (id) {
            blocks.adminNavigation.disactivateAll();
        },

        newField: function () {
            blocks.adminNavigation.disactivateAll();
        },

        cluster: function (id) {
            blocks.adminNavigation.disactivateAll();
        },

        newCluster: function () {
            blocks.adminNavigation.disactivateAll();
        },

        borehole: function (id) {
            blocks.adminNavigation.disactivateAll();
        },

        temperatureSensor: function (boreholeId, id) {
            blocks.adminNavigation.disactivateAll();
        },

        pressureSensor: function (boreholeId, id) {
            blocks.adminNavigation.disactivateAll();
        },

        monitoring: function () {
            blocks.adminNavigation.activateItem('monitoring');
            adminLayout.container.show(blocks.adminMonitoring.getViewInstance());
        }
    };

    return {
        init: initialize,
        handlers: handlers,
        layout: adminLayout
    };
});

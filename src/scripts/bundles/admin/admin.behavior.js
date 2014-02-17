/* global Backbone */

define(function (require) {
    'use strict';

    var Utils = require('core/utils'),
        AdminLayout = require('./admin.layout');

    var Blocks = {
        Navigation: require('blocks/navigation/navigation.block'),
        AdminUsers: require('blocks/admin/users/admin_users.block'),
        AdminUser: require('blocks/admin/user/admin_user.block'),
        AdminResources: require('blocks/admin/resources/admin_resources.block'),
        AdminField: require('blocks/admin/field/field.block'),
        AdminCluster: require('blocks/admin/cluster/cluster.block'),
        AdminMonitoring: require('blocks/admin/monitoring/admin_monitoring.block'),
        AdminNavigation: require('blocks/admin/navigation/admin_navigation.block')
    };

    var blocks = Utils.getInstances(Blocks),
        adminLayout = new AdminLayout();

    adminLayout.on('show', function () {
        adminLayout.navigation.show(blocks.adminNavigation.getViewInstance());
        blocks.navigation.activateItem('admin');
    });

    blocks.adminUser.on('save:click', function (data) {
        Backbone.history.navigate('#/admin/users');
    });

    var initialize = function () {
        blocks.adminUsers.init();
        blocks.adminUser.init();
        blocks.adminResources.init();
        blocks.adminField.init();
        blocks.adminMonitoring.init();
        blocks.adminNavigation.init();
        blocks.adminCluster.init();
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
            blocks.adminField.fetch(id)
                .then(function () {
                    adminLayout.container.show(
                        blocks.adminField.getViewInstance());
                });
        },

        newField: function () {
            blocks.adminNavigation.disactivateAll();
            adminLayout.container.show(
                blocks.adminField.resetModel().getViewInstance());
        },

        cluster: function (id) {
            blocks.adminNavigation.disactivateAll();
            blocks.adminCluster.fetch(id)
                .then(function () {
                    adminLayout.container.show(
                        blocks.adminCluster.getViewInstance());
                });
        },

        newCluster: function () {
            blocks.adminNavigation.disactivateAll();
            adminLayout.container.show(
                blocks.adminCluster.resetModel().getViewInstance());
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

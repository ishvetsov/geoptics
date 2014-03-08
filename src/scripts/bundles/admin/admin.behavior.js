/* global Backbone */

define(function (require) {
    'use strict';

    var Utils = require('core/utils'),
        AdminLayout = require('./admin.layout');

    var Blocks = {
        Navigation: require('blocks/navigation/navigation.block'),
        AdminUsers: require('blocks/admin/users/users.block'),
        AdminUser: require('blocks/admin/user/user.block'),
        AdminResources: require('blocks/admin/resources/resources.block'),
        AdminField: require('blocks/admin/field/field.block'),
        AdminCluster: require('blocks/admin/cluster/cluster.block'),
        AdminMonitoring: require('blocks/admin/monitoring/monitoring.block'),
        AdminNavigation: require('blocks/admin/navigation/admin_navigation.block')
    };

    var blocks = Utils.getInstances(Blocks),
        layout = new AdminLayout();

    layout.on('show', function () {
        layout.navigation.show(blocks.adminNavigation.getViewInstance());
        blocks.navigation.activateItem('admin');
    });

    var initialize = function () {
        blocks.adminNavigation.init();
    };

    var handlers = {
        users: function () {
            blocks.adminNavigation.activateItem('users');
            blocks.adminUsers.init();
            blocks.adminUsers.fetch()
                .then(function () {
                    layout.container.show(
                        blocks.adminUsers.getViewInstance());
                });
        },

        user: function (id) {
            blocks.adminNavigation.disactivateAll();
            blocks.adminUser.init();
            blocks.adminUser.fetch(id)
                .then(function () {
                    layout.container.show(
                        blocks.adminUser.getViewInstance());
                });
        },

        newUser: function () {
            blocks.adminNavigation.disactivateAll();
            blocks.adminUser.init();
            layout.container.show(
                blocks.adminUser.resetModel().getViewInstance());
        },

        fields: function () {
            blocks.adminNavigation.activateItem('fields');
            blocks.adminResources.init();
            blocks.adminResources.fetch()
                .then(function () {
                    layout.container.show(
                        blocks.adminResources.getViewInstance());
                });
        },

        field: function (id) {
            blocks.adminNavigation.disactivateAll();
            blocks.adminField.init({mode: 'edit'});
            blocks.adminField.fetch(id)
                .then(function () {
                    layout.container.show(
                        blocks.adminField.getViewInstance());
                });
        },

        newField: function () {
            blocks.adminNavigation.disactivateAll();
            blocks.adminField.init({mode: 'create'});
            blocks.adminField.resetModel();
            layout.container.show(blocks.adminField.getViewInstance());
        },

        cluster: function (id) {
            blocks.adminNavigation.disactivateAll();
            blocks.adminCluster.init();
            blocks.adminCluster.fetch(id)
                .then(function () {
                    layout.container.show(
                        blocks.adminCluster.getViewInstance());
                });
        },

        newCluster: function () {
            blocks.adminNavigation.disactivateAll();
            blocks.adminCluster.init();
            layout.container.show(
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
            blocks.adminMonitoring.init();
            layout.container.show(blocks.adminMonitoring.getViewInstance());
        }
    };

    return {
        init: initialize,
        handlers: handlers,
        layout: layout
    };
});
